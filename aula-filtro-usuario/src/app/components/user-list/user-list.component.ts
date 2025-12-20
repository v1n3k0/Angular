import { Component } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'Status'];
  userList: IUser[] = UsersList;

  onUserSelected(user: IUser): void {
  console.log('Usuário selecionado:', user);
  }
}
