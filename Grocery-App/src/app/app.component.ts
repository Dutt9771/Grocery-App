import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Login_Logout_msg="Login"
  constructor(private router:Router,private _RegisterService:RegisterService){
  }
  RegisterData:any
  User:any
  ngOnInit(){
    this.RegisterData= JSON.parse(localStorage.getItem('Register_User'));
    this.User= JSON.parse(localStorage.getItem('User'));
    if(this.RegisterData || this.User){
      this.Login_Logout_msg=""
    }
    console.log(this.email)
  }
  title = 'Grocery-App';
  login_logout:boolean |undefined;
  // logout(loggedInuser: boolean) {
    //   this.LoginService.log_out(loggedInuser)    
    //   }
   
    userData:any = localStorage.getItem('User');
    email:any = this.userData
  logout(){
    localStorage.removeItem('User');
    localStorage.removeItem('Register_User')
    this.router.navigate(['front/user/registration'])
    // console.log(this.email)
    this.Login_Logout_msg="Login"
  }
  };
  
  
  
