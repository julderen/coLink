import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { ContentStatus } from 'Components/Helpers';
import { ButtonLoader } from 'Components/Controls';

import SearcherActions from '../../../Shared/Actions/SearcherActions';
import ViewActions from '../Actions/ViewActions';
import CreateForm from './CreateForm';
import Link from '../Components/Link';

class DashboardPagesLinksView extends Component {
  constructor(props) {
    super();

    const {
      actions: {
        linksGet,
        searcherClear,
        filterChange,
        dataClear,
        albumNameSet,
        linkDelete
      },
      match
    } = props;

    this.componentWillUnmount = () => {
      searcherClear();
      dataClear();
    };
    this.componentDidMount = () => {
      albumNameSet(match.params.albumName);
      this.dataFetch();
    };

    this.dataFetch = filter => linksGet(match.params.albumId, filter || this.props.filter);
    this.onLinksDelete = id => () => linkDelete(id);
    this.onLinkOpen = url => () => window.open(url);
    this.onFilterChange = filter => filterChange(filter);
    this.onDownloadMore = () => this.onFilterChange({ offset: this.props.filter.offset + this.props.filter.limit });
  }

  componentWillReceiveProps({ filter: { offset, limit }, searcherValue }) {
    const { filter: { offset: prevOffset }, searcherValue: prevSearcherValue } = this.props;

    if (prevOffset !== offset) this.dataFetch({ searcherValue, offset, limit });
    if (searcherValue !== prevSearcherValue) {
      this.onFilterChange({ offset: 0 });
      this.dataFetch({ query: searcherValue, offset: 0, limit });
    }
  }

  render() {
    const {
      hiddenDownloadMore,
      data,
      status,
      contentStatus,
      match
    } = this.props;

    return (
      <ContentStatus status={contentStatus}>
        <div className="cards">
          {data.map(({ id, ...link }) => (
            <Link
              {...link}
              key={id}
              id={id}
              onLinkOpen={this.onLinkOpen}
              onLinksDelete={this.onLinksDelete}
            />))
          }
          <CreateForm userId={this.props.userId} albumId={match.params.albumId} />
        </div>
        {!hiddenDownloadMore ?
          <div className="download-more">
            <ButtonLoader status={status} onClick={this.onDownloadMore}>
              <i className="material-icons" title="Show more">arrow_downward</i>
            </ButtonLoader>
          </div> :
          null
        }
      </ContentStatus>
    );
  }
}

DashboardPagesLinksView.propTypes = {
  hiddenDownloadMore: PropTypes.bool,
  actions: PropTypes.object,
  filter: PropTypes.object,
  match: PropTypes.object,
  searcherValue: PropTypes.string,
  contentStatus: PropTypes.string,
  userId: PropTypes.string,
  status: PropTypes.string,
  data: PropTypes.array
};

const mapStateToProps = ({ links, user, searcher }) => ({
  ...links,
  searcherValue: searcher.value,
  hiddenDownloadMore: links.lastCount < links.filter.limit,
  userId: user.id
});

export default connectToStore({
  mapStateToProps,
  actions: { ...ViewActions, ...SearcherActions }
})(DashboardPagesLinksView);
