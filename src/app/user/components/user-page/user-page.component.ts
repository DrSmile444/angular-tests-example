import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { User } from '../../../shared';

@Component({
  selector: 'user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user: User | undefined;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.params.id;
    if (!userId) {
      this.router.navigate(['../']);
      return;
    }

    this.getUser(userId);
  }

  getUser(id: number) {
    this.isLoading = true;
    this.userService.getUser(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((user) => this.user = user);
  }
}
