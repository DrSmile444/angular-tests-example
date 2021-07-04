import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, ApiUtilsService, User } from '../../shared';

@Injectable()
export class UserService {
  constructor(
    private apiService: ApiService,
    private apiUtils: ApiUtilsService,
  ) {}

  getUser(id: number): Observable<User> {
    return this.apiService.get<User>(this.apiUtils.makeUri('users', id));
  }

  getUsersList(): Observable<User[]> {
    return this.apiService.get(this.apiUtils.makeUri('users'));
  }
}
