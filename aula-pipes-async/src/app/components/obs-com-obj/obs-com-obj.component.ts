import { Component, OnDestroy } from '@angular/core';
import { UserServices } from '../../services/user.services';
import { OnInit } from '@angular/core';
import { IUserResponse } from '../../Interfaces/user-response.interfaces';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-obj',
  templateUrl: './obs-com-obj.component.html',
  styleUrl: './obs-com-obj.component.scss'
})
export class ObsComObjComponent implements OnInit, OnDestroy {
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  user$!: Observable<IUserResponse>;

  constructor(
    private readonly _userService: UserServices
  ) { }

  ngOnInit(): void {
    this.user$ = this._userService.getUserById(2);

    this.userSubs = this._userService.getUserById(1).subscribe((userReponse) => {
      this.user = userReponse;
    });
  }

  ngOnDestroy(): void {
    this.userSubs && this.userSubs.unsubscribe()
  }

  onBtnClick(id: number) {
    this.user$ = this._userService.getUserById(id);
  }

}