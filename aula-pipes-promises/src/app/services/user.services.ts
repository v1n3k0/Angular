import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    constructor(
        private readonly _http : HttpClient
    ) {}

    getUser():Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz"
                });
            }, 3000);
        });
    }

    getUserById(id: number) : Observable<IUser> {
        return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
    }

}
