import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'userStatusImage',
})
export class UserStatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    const status: { [key:string]: string } = {
      1: 'assets/icons/active-user-icon.png',
      2: 'assets/icons/inactive-user-icon.png',
    }; 

    return status[userStatus];
  }
}