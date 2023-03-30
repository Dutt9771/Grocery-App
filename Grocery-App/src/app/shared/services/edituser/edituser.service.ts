import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangePassword } from '../../Models/changepassword';
import { Edit_user_detail } from '../../Models/edituserdetail';

@Injectable({
  providedIn: 'root'
})
export class EdituserService {

  constructor(private http:HttpClient) { }
baseUrl=environment.baseUrl;
change_password=environment.change_password;
edit_user_details=environment.edit_user;

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
}
