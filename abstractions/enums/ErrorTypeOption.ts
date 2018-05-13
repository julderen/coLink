export enum ErrorTypeOption {
  InternalServerError = 'InternalServerError',
  ValidationError = 'ValidationError',
  IncorrectLoginOrPassword = 'IncorrectLoginOrPassword',
  NotFoundUserWithEmail = 'NotFoundUserWithEmail',
  TokenParseFailed = 'TokenParseFailed',
  TokenExpired = 'TokenExpired'
}
