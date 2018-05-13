import { ErrorTypeOption } from '../../abstractions/enums';
import { HttpError } from '../../abstractions/errors';

export class IncorrectLoginOrPasswordError extends HttpError {
  constructor(message?: string) {
    super(404, ErrorTypeOption.IncorrectLoginOrPassword, message);
  }
}
