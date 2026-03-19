import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResponse } from '../Interfaces/user-response.interfaces';

@Injectable({
  providedIn: 'root',
})

export class UserServices {
    constructor(
        private readonly _http: HttpClient
    ) {}

    getUserById(id: number) : Observable<IUserResponse> {
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
}