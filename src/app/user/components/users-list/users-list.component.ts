import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { User } from '../../../shared';

@Component({
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  isLoading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.isLoading = true;
    this.userService.getUsersList()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((users) => this.usersList = users);
  }
}
