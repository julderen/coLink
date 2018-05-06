import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl, Button } from 'Components/Controls';

class ControlsSearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentWillReceiveProps({ value }) {
    const { value: prevValue } = this.props;

    if (value !== prevValue && value !== this.state.value) this.setState({ value });
  }

  onChange({ target: { value } }) {
    this.setState({ value });

    const { trigger, onChange } = this.props;

    if (trigger === 'search') {
      onChange(value);
    }
  }

  onSearch(event) {
    event.preventDefault();

    this.props.onChange(this.state.value);
  }

  render() {
    const { trigger, placeholder, searchLabel, className } = this.props;

    return (
      <form className={classNames('search-input', className)} onSubmit={this.onSearch}>
        <FormControl
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.onChange}
        />
        {trigger === 'click' ? (
          <Button
            bsStyle="primary"
            onClick={this.onSearch}
          >
            {searchLabel}
          </Button>
        ) : null}
      </form>
    );
  }
}

ControlsSearchInput.propTypes = {
  trigger: PropTypes.string,
  placeholder: PropTypes.string,
  searchLabel: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

ControlsSearchInput.defaultProps = {
  placeholder: 'Поиск...',
  searchLabel: 'Поиск',
  trigger: 'click'
};

export default ControlsSearchInput;
