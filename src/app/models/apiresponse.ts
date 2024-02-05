import { HttpStatusCode } from '@angular/common/http';

export class Apiresponse<T> {
  isSuccess!: boolean;
  statusCode!: HttpStatusCode;
  message!: string;
  result!: T;
}
