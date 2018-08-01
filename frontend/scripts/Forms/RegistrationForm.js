import { Form as BaseFrom } from 'mobx-react-form';
import { observable, autorun, computed } from 'mobx';
import validatorjs from 'validatorjs';

class RegForm extends BaseFrom {
    @observable email = '';

    @observable login = '';

    @observable password = '';

    @observable repeatPassword = '';

    plugins() {
      return { dvr: validatorjs };
    }

    setup() {
      return {
        fields: {
          email: {
            label: 'Email',
            placeholder: 'email',
            rules: 'required|string',
            value: this.email,
          },
          login: {
            label: 'Login',
            placeholder: 'login',
            rules: 'required|string|between:5,25',
            value: this.login,
          },
          password: {
            label: 'Password',
            placeholder: 'password',
            rules: 'required|string|between:5,25',
            value: this.password,
          },
          repeatPassword: {
            label: 'RepeatPassword',
            placeholder: 'repeat password',
            rules: 'required|string|same:password',
            value: this.repeatPassword,
          },
        },
      };
    }

    hooks() {
      return {
        onSuccess(form) {
          const { email, login, password } = form.values();
          console.log('your data is: ', JSON.stringify({ email, login, password }));
        },
        onError(form) {
          console.log('All form errors', form.errors());
        },
      };
    }
}

export default RegForm;
