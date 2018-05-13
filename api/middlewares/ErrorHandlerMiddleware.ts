import { Request, Response } from 'express';
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';

import { ErrorTypeOption } from 'abstractions/enums';
import { IError } from 'abstractions/errors';

@Middleware({ type: 'after' })
class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: Request, response: Response, next: (err: any) => any) {
    const statusCode = 'httpCode' in error && typeof error.httpCode === 'number' ? error.httpCode : 500;

    const resultError: IError = {
      failure: true,
      type: 'type' in error && error.type ? error.type : ErrorTypeOption.InternalServerError
    };

    if ('errors' in error && error.errors) {
      resultError.type = ErrorTypeOption.ValidationError;
      resultError.validationErrors = error.errors;
    } else if ('message' in error && error.message) {
      resultError.message = error.message;
    }

    response.status(statusCode).json(resultError);
  }
}

export default CustomErrorHandler;
