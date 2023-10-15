import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, catchError,  throwError } from 'rxjs';
import { ICustomer } from '../components/modals/icustomer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private dialog: MatDialog,private httpClient: HttpClient) {}

  openDialog(component: any): void {
    this.dialog.open(component);
  }
  private serverUrl : string = "http://localhost:3000";
  
  //get all customers
  public getCustomers():Observable<ICustomer[]>{
    let dataUrl = `${this.serverUrl}/customers`;
    return this.httpClient.get<ICustomer[]>(dataUrl).pipe(catchError(this.handleError))
  }

  //get customer by ID
  public getCustomerById(customerId:string):Observable<ICustomer>{
    let dataUrl = `${this.serverUrl}/customers/${customerId}`;
    return this.httpClient.get<ICustomer>(dataUrl).pipe(catchError(this.handleError))
  }

  //add a new customer
public addCustomers(customer:ICustomer):Observable<ICustomer>{
  let dataUrl = `${this.serverUrl}/customers`;
  return this.httpClient.post<ICustomer>(dataUrl,customer).pipe(catchError(this.handleError))

}

//update Customer
public updateCustomers(customerId:string,customer:ICustomer):Observable<ICustomer>{
  let dataUrl = `${this.serverUrl}/customers/${customerId}`;
  return this.httpClient.put<ICustomer>(dataUrl,customer).pipe(catchError(this.handleError))
}

//delete a customer
public deleteCustomers(customerId?:string):Observable<{}>{
  let dataUrl = `${this.serverUrl}/customers/${customerId}`;
  return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError))
}

handleError(error:HttpErrorResponse) {
  let errorMessage:string=``;
  if(error.error instanceof ErrorEvent){
    //client error
    errorMessage=`Error :${error.error.message}`;
  }
  else{
    //server error
    errorMessage=`Status :${error.status}`;
  }
  return throwError(errorMessage);
}


//get all addresses
// public getAddresss():Observable<IAddress[]>{
//   let dataUrl = `${this.serverUrl}/addresses`;
//   return this.httpClient.get<IAddress[]>(dataUrl).pipe(catchError(this.handleError))
// }

// //get group by id
// public getAddressById(groupId:string):Observable<IAddress>{
//   let dataUrl = `${this.serverUrl}/addresses/${groupId}`;
//   return this.httpClient.get<IAddress>(dataUrl).pipe(catchError(this.handleError))
// }


//   handleError(error:HttpErrorResponse) {
//     let errorMessage:string=``;
//     if(error.error instanceof ErrorEvent){
//       //client error
//       errorMessage=`Error :${error.error.message}`;
//     }
//     else{
//       //server error
//       errorMessage=`Status :${error.status}`;
//     }
//     return throwError(errorMessage);
//   }
}
