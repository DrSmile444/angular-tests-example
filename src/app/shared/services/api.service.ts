import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ApiUtilsService } from './api-utils.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private apiUtils: ApiUtilsService,
  ) {}

  get<T = any>(url: string): Observable<T> {
    return this.http.get<T>(this.apiUtils.makeUri(environment.baseUrl, url)).pipe(delay(500));
  }
}
