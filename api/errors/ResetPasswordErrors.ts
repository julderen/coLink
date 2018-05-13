import { ErrorTypeOption } from '../../abstractions/enums';
import { HttpError } from '../../abstractions/errors';

export class NotFoundUserWithEmailError extends HttpError {
  constructor(message?: string) {
    super(404, ErrorTypeOption.NotFoundUserWithEmail, message);
  }
}

export class TokenParseFailedError extends HttpError {
  constructor(message?: string) {
    super(500, ErrorTypeOption.TokenParseFailed, message);
  }
}

export class TokenExpiredError extends HttpError {
  constructor(message?: string) {
    super(500, ErrorTypeOption.TokenExpired, message);
  }
}
