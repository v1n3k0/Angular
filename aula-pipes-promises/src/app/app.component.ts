import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.services';
import { IUser } from './interfaces/user.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userPromise: Promise<IUser> | undefined;
  userByIdPromise: Promise<IUser> | undefined;

  constructor(
    private readonly _userService: UserService
  ) {}

  ngOnInit(): void {
    this.userPromise = this._userService.getUser();
    this.userByIdPromise = lastValueFrom(this._userService.getUserById(2));

    this.userPromise.then(user => {
      console.log(user);
    });
  }

}
