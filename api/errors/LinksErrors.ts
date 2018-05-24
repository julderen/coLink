import { ErrorTypeOption } from '../../abstractions/enums';
import { HttpError } from '../../abstractions/errors';

export class AlbumNotExit extends HttpError {
  constructor(message?: string) {
    super(404, ErrorTypeOption.AlbumNotExit, message);
  }
}
