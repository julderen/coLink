import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/lib/Pagination';

const MAX_BUTTONS = 3;

class ControlsPagination extends Component {
  constructor(props) {
    super(props);

    this.onCountChange = count => () => props.onCountChange(count);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentWillReceiveProps({ totalCount, offset, count }) {
    if (totalCount && totalCount === offset) {
      this.onPageChange(totalCount / count);
    }
  }

  onPageChange(page, event) {
    if (event) event.preventDefault();

    const { offset, totalCount, count, onPageChange } = this.props;
    const newOffset = (page * count) - count;

    if (newOffset !== offset && newOffset >= 0 && newOffset < totalCount) {
      onPageChange(newOffset, page, event);
    }
  }

  renderCounts() {
    const { counts, count, totalCount } = this.props;

    if (counts.length < 2 || _.head(counts) >= totalCount) return null;

    return (
      <div className="counts">
        {counts.map((item, id) => (
          <button
            key={id}
            className={item === count ? 'is-selected' : ''}
            onClick={this.onCountChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }

  renderPages() {
    const { offset, totalCount, count } = this.props;
    const buttons = Math.ceil(totalCount / count);

    if (buttons < 2) return null;

    const activePage = offset > 0 ? (offset / count) + 1 : 1;
    const maxButtons = buttons < MAX_BUTTONS ? buttons : MAX_BUTTONS;

    return (
      <Pagination
        prev
        next
        ellipsis
        boundaryLinks
        items={buttons}
        maxButtons={maxButtons}
        activePage={activePage}
        onSelect={this.onPageChange}
      />
    );
  }

  render() {
    return (
      <div className="controls-pagination">
        {this.renderPages()}
        {this.renderCounts()}
      </div>
    );
  }
}

ControlsPagination.propTypes = {
  offset: PropTypes.number,
  count: PropTypes.number.isRequired,
  counts: PropTypes.array,
  totalCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onCountChange: PropTypes.func.isRequired
};

export default ControlsPagination;
