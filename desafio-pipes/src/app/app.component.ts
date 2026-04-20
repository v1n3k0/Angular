import { Component, OnInit } from '@angular/core';
import { OperationsService } from './services/operation.service';
import { OperationsListResponse } from './types/operations-list-response.type';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // operations: OperationsListResponse | undefined;
  searchValue: string = '';
  operationsList$: Observable<OperationsListResponse> | undefined;

  constructor(
    private readonly _operationsService: OperationsService
  ){}

  ngOnInit(): void {
    this.operationsList$ = this._operationsService.getOperations();
    // this.getOperations();
  }

  // getOperations(){
  //   this._operationsService.getOperations()
  //   .pipe(take(1))
  //   .subscribe((operationsListReponse) => {
  //     this.operations = operationsListReponse;
  //   });
  // }

  // public filterName(event: KeyboardEvent): void {
  //   const name = (event.target as HTMLInputElement).value;
  //   console.log(name);
  //   if(name.length === 0){
  //     this.getOperations();
  //     return;
  //   }
  //   this.operations = this.operations?.filter(operation => operation.customerName.toLowerCase().includes(name.toLowerCase()));
  // }
}
