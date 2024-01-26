import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  value: any;

  constructor(private http:HttpClient) { }



  addUsers(usersData:any){
    return this.http.post('https//dummyjson.com//users/',usersData);
  }
   
  // Users(){
  //   return this.http.get('https://dummyjson.com/products');
  // }
   
}
