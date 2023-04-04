import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Add_User_Address } from '../../Models/add_user_address';
import { ChangePassword } from '../../Models/changepassword';
import { Edit_user_detail } from '../../Models/edituserdetail';

@Injectable({
  providedIn: 'root'
})
export class EdituserService {

  constructor(private http:HttpClient) { }
baseUrl=environment.baseUrl;
change_password=environment.customers_routes.change_password;
edit_user_details=environment.customers_routes.edit_user;
add_address=environment.customers_routes.add_address
user_details=environment.customers_routes.user_details

  Change_Password(data:ChangePassword){
    try {
      return this.http.put<ChangePassword>(this.baseUrl+this.change_password,data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }

  Edit_user_details(data:Edit_user_detail){
    try {
      return this.http.put<Edit_user_detail>(this.baseUrl+this.edit_user_details,data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
  Add_User_Address(data:Add_User_Address){
    try {
      return this.http.post<Add_User_Address>(this.baseUrl+this.add_address,data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
  Get_User_Details(){
    try {
      return this.http.get<any>(this.baseUrl+this.user_details)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }

  // ADDRESS

  private User_addresses: any;


  public get_User_addresses(): any {
    return this.User_addresses;
  }

  public set_User_addresses(countries:any): void {
    this.User_addresses = countries;
  }
}


