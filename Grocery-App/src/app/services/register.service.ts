import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }

  get_Register_data(data:any){
 return this.http.post("http://localhost:3000/Register",data,{observe:"response"}).subscribe(data=>{
  localStorage.setItem("Register_User",JSON.stringify(data.body))
this.router.navigate(['/front/user/login'])
 })
  }
  Login_Logout_msg
  Change_btn(data: string){
    if(data=="Login"){
      data=""
            return data;
 }else{
  data="Login"
  return data
 }
}
}
