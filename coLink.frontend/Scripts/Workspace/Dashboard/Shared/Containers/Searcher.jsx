import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { SearchInput } from 'Components/Controls';

import SearcherActions from '../Actions/SearcherActions';

class DashboardHeader extends Component {
  constructor() {
    super();

    this.onValueChange = value => this.props.actions.changeValue(value);
  }
  render() {
    return (<SearchInput onChange={this.onValueChange} value={this.props.value} />);
  }
}


DashboardHeader.propTypes = {
  value: PropTypes.string,
  actions: PropTypes.object,
};

export default connectToStore({ name: 'searcher', actions: SearcherActions })(DashboardHeader);
