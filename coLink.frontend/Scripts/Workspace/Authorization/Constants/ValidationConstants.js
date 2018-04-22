import { combine, validate } from 'Services/ValidationService';
import { required, maxLength, alfaNumber, email } from 'Utils/ValidationRules';

import { FIELD_MAX_LENGTH } from './SignInConstants';

const signInValidation = combine(
  validate('email', required, maxLength(FIELD_MAX_LENGTH), email),
  validate('password', required, maxLength(FIELD_MAX_LENGTH), alfaNumber),
);

const registrationValidation = combine(
  validate('email', required, maxLength(FIELD_MAX_LENGTH), email),
  validate('login', required, maxLength(FIELD_MAX_LENGTH), alfaNumber),
  validate('password', required, maxLength(FIELD_MAX_LENGTH), alfaNumber),
  validate('repeatPassword', required, maxLength(FIELD_MAX_LENGTH), alfaNumber),
);

export { signInValidation, registrationValidation };
