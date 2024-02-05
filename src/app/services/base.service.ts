import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../models/apiresponse';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private httpClient: HttpClient) {}
  // Common Function for posting to database
  Post<ReqT, ResT>(model: ReqT, url: string): Observable<Apiresponse<ResT>> {
    return this.httpClient.post<Apiresponse<ResT>>(
      environment.apiBaseUrl + url,
      model
    );
  }

  // Common Function for retrieving data from database
  Fetch<ResT>(url: string): Observable<Apiresponse<ResT>> {
    return this.httpClient.get<Apiresponse<ResT>>(environment.apiBaseUrl + url);
  }

  // Common Function for delete data from database
  Delete<ResT>(url: string): Observable<Apiresponse<ResT>> {
    return this.httpClient.delete<Apiresponse<ResT>>(
      environment.apiBaseUrl + url
    );
  }

  // Common Function for updating data into database
  Update<ReqT, ResT>(model: ReqT, url: string): Observable<Apiresponse<ResT>> {
    return this.httpClient.put<Apiresponse<ResT>>(
      environment.apiBaseUrl + url,
      model
    );
  }
}
