import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }

  get_Register_data(data:any){
 return this.http.post("http://localhost:3000/Register",data,{observe:"response"}).subscribe(data=>{
  sessionStorage.setItem("Register_User",JSON.stringify(data.body))
this.router.navigate(['/front/user/login'])
 })
  }
  get_Login_data(data){

  return sessionStorage.setItem("Login_User",JSON.stringify(data))

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
