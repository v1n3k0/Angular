import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { operationsListResponseMock } from "../mocks/operations-list-reponse.mock";
import { OperationsListResponse } from "../types/operations-list-response.type";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
    getOperations(): Observable<OperationsListResponse>{
        return of(operationsListResponseMock);
    }
}