import React from 'react';
import PropTypes from 'prop-types';

const ControlsButtonsGroup = ({ children }) => (
  <div className="buttons-group">
    {children}
  </div>
);

ControlsButtonsGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default ControlsButtonsGroup;
