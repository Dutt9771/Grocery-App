import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangePassword } from '../../Models/changepassword';

@Injectable({
  providedIn: 'root'
})
export class EdituserService {

  constructor(private http:HttpClient) { }
baseUrl=environment.baseUrl;
change_password=environment.change_password;
  Change_Password(data){
    try {
      return this.http.put<ChangePassword>(this.baseUrl+this.change_password,data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
}
