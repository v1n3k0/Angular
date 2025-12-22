import { Component, OnInit } from '@angular/core';

import { UsersList } from './data/users-list';

import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userList: IUser[] = [];
  userListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.userList = UsersList;
      this.userListFiltered = UsersList;
    }, 1000);
  }

  onUserSelected(user: IUser): void {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions): void {
    console.log('Filter options received in AppComponent: ', filterOptions);

    this.userListFiltered = filterUsersList(filterOptions, this.userList);
  }
}