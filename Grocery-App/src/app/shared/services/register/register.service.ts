import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { environment } from 'src/app/shared/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }
baseurl=environment.baseurl
register=environment.register
  get_Register_data(data:any){
    try {
      return this.http.post(this.baseurl+this.register,data,{observe:"response"}).subscribe(data=>{
        sessionStorage.setItem("Register_User",JSON.stringify(data.body))
      this.router.navigate(['/front/user/login'])
       })
    } catch (error:any) {
      return throwError(() => new Error('test'))
    }

  }
  get_Login_data(data){
    try {
      return sessionStorage.setItem("Login_User",JSON.stringify(data))
    } catch (error:any) {
      return throwError(() => new Error(error))
    }

 }

  Login_Logout_msg=new Subject<string>()
//   Change_btn(data: string){
//     if(data=="Login"){
//       data=""
//             return data;
//  }else{
//   data="Login"
//   return data
//  }
// }
}
