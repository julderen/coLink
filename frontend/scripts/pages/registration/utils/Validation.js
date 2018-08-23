import { notEmpty, minLength, equalPassword, validEmail } from 'validation';

export default values => ({
  email: notEmpty(values.email)('email') || validEmail(values.email),
  login: notEmpty(values.login)('логин'),
  password: minLength(8)(values.password) || notEmpty(values.password)('пароль'),
  repeat: equalPassword(values.password)(values.repeat),
});
