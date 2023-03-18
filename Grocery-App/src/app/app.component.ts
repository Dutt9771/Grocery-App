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
  filterValue:any
  Registered_User:boolean=false
  Login_Logout_msg:string="Login"
  constructor(private router:Router,private _RegisterService:RegisterService){
    this._RegisterService.Login_Logout_msg.subscribe(res=>{
      this.Login_Logout_msg == res;
    })
  }
  RegisterData:any
  User:any
  LoginData:any
  ngOnInit(){
    
    this.LoginData= JSON.parse(sessionStorage.getItem('Login_User'));
    this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
    this.User= JSON.parse(sessionStorage.getItem('User'));
    if(this.LoginData || this.User){
      this.Login_Logout_msg="Logout"
    }
   
  }
  ngDoCheck(){
    this.LoginData= JSON.parse(sessionStorage.getItem('Login_User'));
    this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
    if(this.RegisterData){
      this.Registered_User=false
    }else{
      this.Registered_User=true
    }
    this.User= JSON.parse(sessionStorage.getItem('User'));
    if(this.LoginData || this.User){
      this.Login_Logout_msg="Logout"
    }
  }
  ngDoChanges(){
    this.LoginData= JSON.parse(sessionStorage.getItem('Login_User'));
    this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
    if(this.RegisterData){
      this.Registered_User=false
    }else{
      this.Registered_User=true
    }
    this.User= JSON.parse(sessionStorage.getItem('User'));
    if(this.LoginData || this.User){
      this.Login_Logout_msg="Logout"
    }
  }
  title = 'Grocery-App';
  login_logout:boolean |undefined;
  // logout(loggedInuser: boolean) {
    //   this.LoginService.log_out(loggedInuser)    
    //   }
   
    userData:any = sessionStorage.getItem('User');
    email:any = this.userData
  logout(){
    sessionStorage.removeItem('User');
    sessionStorage.removeItem('Login_User');
    sessionStorage.removeItem('Register_User')
    this.router.navigate(['front/user/registration'])
    // console.log(this.email)
    this.Login_Logout_msg="Login"
  }
  };
  
  
  
