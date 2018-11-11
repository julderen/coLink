import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const AlertError = ({ error }) => (
  <article className={classNames({ hidden: !error }, 'alert-error')}>{error}</article>
);

AlertError.propTypes = {
  error: PropTypes.string,
};

export default AlertError;
