import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { Link } from 'components/controls';

import { Form } from 'components/form';
import FormComponent from '../components/Form';
import validation from '../utils/Validation';

// import image from '../../../../Files/TabletImage.png';


@inject(['registration'])
@observer
class RegistrationView extends Component {
  submitForm = (values) => {
    const { registration: { fetchData } } = this.props;
    fetchData(values);
  };

  render() {
    const { registration: { status, error } } = this.props;
    const { submitForm } = this;
    // <img src={image} alt="img" className="image" />

    return (
      <section className="registration-container">
        <Form
          onSubmit={submitForm}
          render={({ handleSubmit, invalid }) => (
            <FormComponent
              handleSubmit={handleSubmit}
              invalid={invalid}
              error={error}
              status={status}
            />
          )}
          validate={validation}
        />
        <div className="form-linkContainer">
          Есть аккаунт?
          <Link path="/Login" text=" Войти..." />
        </div>
      </section>
    );
  }
}

RegistrationView.propTypes = {
  registration: PropTypes.objectOf(
    PropTypes.shape({
      fetchData: PropTypes.func.isRequired,
      status: PropTypes.string.isRequired,
      error: PropTypes.string,
      resetStatus: PropTypes.func,
    }),
  ),
};

export default RegistrationView;
