import { HttpError as RoutingHttpError } from 'routing-controllers';

export class HttpError extends RoutingHttpError {
  type: string;
  constructor(httpCode: number, type: string, message?: string) {
    super(httpCode, message);

    this.type = type;
  }
}
