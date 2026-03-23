import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../services/user.services';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../../types/users-list-response.types';

@Component({
  selector: 'app-obs-com-array',
  templateUrl: './obs-com-array.component.html',
  styleUrl: './obs-com-array.component.scss'
})
export class ObsComArrayComponent implements OnInit {
  users$!: Observable<UsersListResponse>;

  constructor(
    private readonly _userService: UserServices
  ) { }

  ngOnInit(): void {
    this.users$ = this._userService.getUsers();
  }

}
