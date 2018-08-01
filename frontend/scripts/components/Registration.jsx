import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import RegistrationForm from '../Forms/RegistrationForm';

import '../../styles/Registration.scss';

@observer
class Registration extends Component {
  constructor(props) {
    super(props);
    this.form = new RegistrationForm();
  }

  render() {
    return (
      <form>
        <input {...this.form.$('email').bind()} />
        <p>
          {this.form.$('email').error}
        </p>
        <input {...this.form.$('login').bind()} />
        <p>
          {this.form.$('login').error}
        </p>
        <input {...this.form.$('password').bind()} />
        <p>
          {this.form.$('password').error}
        </p>
        <input {...this.form.$('repeatPassword').bind()} />
        <p>
          {this.form.$('repeatPassword').error}
        </p>
        <button onClick={this.form.onSubmit} type="button">
          {'Submit'}
        </button>
        <button onClick={this.form.onClear} type="button">
          {'Clear'}
        </button>
      </form>
    );
  }
}

export default Registration;
