import { Pipe, PipeTransform } from "@angular/core";
import { UserStatusEnum } from "../app.component";

@Pipe({
    name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {
    transform(userStatus: number): string {
        // if(userStatus === UserStatusEnum.Ativo) {
        //     return 'Ativo';
        // } else if(userStatus === UserStatusEnum.Inativo) {
        //     return 'Inativo';
        // } else {
        //     return 'Inválido';
        // }

        const userStatusDescriptions : { [key : number]: string } = {
            [UserStatusEnum.Ativo]: 'Ativo',
            [UserStatusEnum.Inativo]: 'Inativo'
        };

        return userStatusDescriptions[userStatus] ? userStatusDescriptions[userStatus] : 'Inválido';
    }
}