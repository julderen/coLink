import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { Form } from 'components/form';
import { Link } from 'components/controls';
import FormComponent from '../components/Form';
import validation from '../utils/Validation';
import image from "../../../../Files/TabletImage.png";

@inject(['authorization'])
@observer
class AuthorizationView extends Component {
  submitForm = (values) => {
    const { authorization: { fetchData } } = this.props;
    fetchData(values);
  };

  render() {
    const { authorization: { error, status, isAuthorization } } = this.props;
    const { submitForm } = this;
    return (
      <section className="authorization-container">
        <img src={image} alt="img" className="image" />
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, invalid }) => (
            <FormComponent
              handleSubmit={handleSubmit}
              invalid={invalid}
              error={error}
              status={status}
              isAuthorization={isAuthorization}
            />
          )}
          validate={validation}
        />
        <div className="form-linkContainer">
          Нет аккаунта?
          <Link path="/Registration" text=" Регистрация..." />
        </div>
      </section>
    );
  }
}


AuthorizationView.propTypes = {
  authorization: PropTypes.objectOf(
    PropTypes.shape({
      fetchData: PropTypes.func.isRequired,
      status: PropTypes.string.isRequired,
      error: PropTypes.string,
      resetError: PropTypes.func,
    }),
  ),
};

export default AuthorizationView;
