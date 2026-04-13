import { Component, OnInit } from '@angular/core';
import { operationsListResponseMock } from './mocks/operations-list-reponse.mock';
import { OperationsService } from './services/operation.service';
import { OperationsListResponse } from './types/operations-list-response.type';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  operations: OperationsListResponse | undefined;

  constructor(
    private readonly _operationsService: OperationsService
  ){}

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(){
    this._operationsService.getOperations()
    .pipe(take(1))
    .subscribe((operationsListReponse) => {
      this.operations = operationsListReponse;
    });
  }

  public filterName(event: KeyboardEvent): void {
    const name = (event.target as HTMLInputElement).value;
    console.log(name);
    if(name.length === 0){
      this.getOperations();
      return;
    }
    this.operations = this.operations?.filter(operation => operation.customerName.toLowerCase().includes(name.toLowerCase()));
  }
}
