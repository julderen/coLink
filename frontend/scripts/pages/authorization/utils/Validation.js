import { notEmpty, minLength, validEmail } from 'validation';

export default values => ({
  email: notEmpty(values.email)('email') || validEmail(values.email),
  password: minLength(8)(values.password) || notEmpty(values.password)('пароль'),
});
