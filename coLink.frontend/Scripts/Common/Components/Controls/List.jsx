import _ from 'lodash';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const ControlsList = ({ className, data, selected, keyField, noDataMessage, children, onSelect }) => {
  if (_.isEmpty(data)) return <div className="no-data-message">{noDataMessage}</div>;

  return (
    <ul className={className}>
      {_.map(data, item => (
        <li
          key={item[keyField]}
          className={classNames({ 'is-selected': selected && selected[keyField] === item[keyField] })}
          onClick={onSelect(item)}
        >
          {children(item)}
        </li>
      ))}
    </ul>
  );
};

ControlsList.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.object,
  keyField: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  noDataMessage: PropTypes.string,
  children: PropTypes.func,
  onSelect: PropTypes.func
};

ControlsList.defaultProps = {
  noDataMessage: 'Нет данных'
};

export default ControlsList;
