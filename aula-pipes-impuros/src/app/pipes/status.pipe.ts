import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: false,
})
export class StatusPipe implements PipeTransform {
  counter = 0;
  transform(userStatus: number): string {
    this.counter += 1;
    console.log(`StatusPipe foi chamado ${this.counter} vezes`);
    try {
      if (userStatus === 3) {
        throw new Error('Status inválido');
      }

      const status: { [key: string]: string } = {
        1: 'Ativo',
        2: 'Inativo',
      };

      return status[userStatus];
    } catch (error) {
      return 'Status inválido';
    }
  }
}
