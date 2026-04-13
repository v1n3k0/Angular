import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'statusImg',
})
export class StatusImgPipe implements PipeTransform {
  transform(userStatus: number): string {
    const statusMap: { [key: number]: string } = {
      1: "assets/icons/active-icon.png",
      2: "assets/icons/inactive-icon.png",
    };

    return statusMap[userStatus];
  }
}