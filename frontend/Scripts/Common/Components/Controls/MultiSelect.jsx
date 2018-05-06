import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'react-widgets/lib/Multiselect';
import BaseField from 'Components/Form/BaseField';
import { DATA_DEFAULT_SAMPLE } from 'Constants/BaseInitialStates';

const SEARCH_TIMEOUT = 500;

const DEFAULT_MESSAGES = {
  createNew: 'создать новый элемент.',
  emptyFilter: 'Ничего не найдено',
  emptyValue: 'Ничего не выбрано',
  emptyList: 'Ничего не найдено',
};

class ControlsMultiSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: []
    };

    this.onSearch = _.debounce(value => this.dataFetch(value), SEARCH_TIMEOUT);

    this.onToggle = this.onToggle.bind(this);
    this.dataFetch = this.dataFetch.bind(this);
  }

  onToggle(isOpen) {
    const { onBlur } = this.props.input;

    if (_.isFunction(onBlur) && !isOpen) onBlur();
    if (isOpen) this.dataFetch();
  }

  dataFetch(value) {
    const { dataFetch, queryParams } = this.props;

    dataFetch({ ...DATA_DEFAULT_SAMPLE, ...queryParams, search: value })
      .loading(() => this.setState({ loading: true }))
      .then(({ response }) => {
        this.setState({ data: response.data || response, loading: false });
      })
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    const {
      disabled,
      required,
      hidden,
      inline,
      label,
      className,
      placeholder,
      errorsDisplayType,
      valueField,
      textField,
      meta,
      messages,
      input: { value, onChange, onFocus }
    } = this.props;
    const { data, loading } = this.state;

    return (
      <BaseField
        required={required}
        inline={inline}
        hidden={hidden}
        label={label}
        className={className}
        errorsDisplayType={errorsDisplayType}
        meta={meta}
      >
        <div className="multi-select rw-widget-wrap">
          <MultiSelect
            disabled={disabled}
            busy={loading}
            placeholder={placeholder}
            valueField={valueField}
            textField={textField}
            data={data}
            value={value || []}
            messages={messages || DEFAULT_MESSAGES}
            onFocus={onFocus}
            onChange={onChange}
            onToggle={this.onToggle}
            onSearch={this.onSearch}
          />
        </div>
      </BaseField>
    );
  }
}

ControlsMultiSelect.propTypes = {
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  hidden: PropTypes.bool,
  required: PropTypes.bool,
  messages: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  queryParams: PropTypes.object,
  label: PropTypes.string,
  valueField: PropTypes.string,
  errorsDisplayType: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  dataFetch: PropTypes.func
};

export default ControlsMultiSelect;
