import _ from 'lodash';
import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio, Row, Col } from 'Components/Controls';
import { BaseField } from 'Components/Form';

class RadioSet extends Component {
  constructor() {
    super();

    this.onChange = (item, onChange) => () => onChange(item);
  }

  render() {
    const { disabled, vertical, data, input, ...props } = this.props;
    const xs = vertical ? 12 : (12 / data.length);
    const md = xs;

    return (
      <BaseField {...props}>
        <Row className={classNames('radio-set', { vertical })}>
          {data.map(({ name, label, value }) => (
            <Col key={name} xs={xs} md={md}>
              <Radio
                disabled={disabled}
                checked={_.isEqual(input.value, value)}
                name={name}
                label={label}
                onChange={this.onChange(value, input.onChange)}
              />
            </Col>
          ))}
        </Row>
      </BaseField>
    );
  }
}

RadioSet.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  vertical: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
};

RadioSet.defaultProps = {
  disabled: false,
  vertical: false,
};

export default RadioSet;
