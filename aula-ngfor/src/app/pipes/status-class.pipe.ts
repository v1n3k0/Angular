import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'statusClass',
  pure: true
})
export class StatusClassPipe implements PipeTransform {
  transform(age: number): string {
    if (age < 18) {
      return 'active';
    } else if (age >= 18 && age < 40) {
      return 'partial';
    } else {
      return 'blocked';
    }
  }
}