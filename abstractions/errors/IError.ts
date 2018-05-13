export interface IError {
  failure: boolean;
  type: string;
  message?: string;
  validationErrors?: any;
}
