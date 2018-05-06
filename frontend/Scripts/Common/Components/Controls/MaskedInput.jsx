import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const MaskedInput = props => (
  <InputMask
    {...props}
    maskChar={null}
    className={classNames('form-control', props.className)}
    type="text"
  />
);

MaskedInput.propTypes = {
  className: PropTypes.string
};

export default MaskedInput;
