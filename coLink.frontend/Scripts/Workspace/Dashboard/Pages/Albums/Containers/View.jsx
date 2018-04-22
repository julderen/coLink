import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { ContentStatus } from 'Components/Helpers';
import { ButtonLoader } from 'Components/Controls';

import SearcherActions from '../../../Shared/Actions/SearcherActions';
import ViewActions from '../Actions/ViewActions';
import CreateForm from './CreateForm';
import Album from '../Components/Album';

class DashboardPagesAlbumsView extends Component {
  constructor(props) {
    super();

    const {
      albumsGet,
      albumEditFormOpen,
      albumTypeToggle,
      albumDelete,
      filterChange,
      searcherClear
    } = props.actions;

    this.componentDidMount = () => this.dataFetch();
    this.componentWillUnmount = () => searcherClear();

    this.dataFetch = filter => albumsGet(filter || this.props.filter);
    this.onAlbumOpen = (id, name) => () => this.props.history.push(`/Dashboard/Links/${id}/${name}`);
    this.onAlbumDelete = id => () => albumDelete(id);
    this.onAlbumTypeToggle = (id, type) => () => albumTypeToggle(id, type);
    this.onAlbumEditFormOpen = album => () => albumEditFormOpen(album);
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
      contentStatus,
      status,
      editingAlbum
    } = this.props;

    return (
      <ContentStatus status={contentStatus}>
        <div className="cards">
          {data.map(({ id, ...album }) => (
            <Album
              key={id}
              {...album}
              isEditing={editingAlbum === id}
              id={id}
              onAlbumOpen={this.onAlbumOpen}
              onAlbumEditFormOpen={this.onAlbumEditFormOpen}
              onAlbumDelete={this.onAlbumDelete}
              onAlbumTypeToggle={this.onAlbumTypeToggle}
            />))
          }
          <CreateForm userId={this.props.userId} />
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

DashboardPagesAlbumsView.propTypes = {
  hiddenDownloadMore: PropTypes.bool,
  actions: PropTypes.object,
  history: PropTypes.object,
  filter: PropTypes.object,
  editingAlbum: PropTypes.string,
  userId: PropTypes.string,
  searcherValue: PropTypes.string,
  status: PropTypes.string,
  contentStatus: PropTypes.string,
  data: PropTypes.array
};

const mapStateToProps = ({ albums, user, searcher }) => ({
  ...albums,
  searcherValue: searcher.value,
  hiddenDownloadMore: albums.lastCount < albums.filter.limit,
});

export default connectToStore({ mapStateToProps, actions: { ...ViewActions, ...SearcherActions } })(DashboardPagesAlbumsView);
