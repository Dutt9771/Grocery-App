import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SocialAuthService} from '@abacritt/angularx-social-login';
import { NavigationExtras, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// Google Login
  user:any; 
  loggedIn!:boolean;
 buttonval:any
  constructor(private authService: SocialAuthService,private router:Router,private _RegisterService:RegisterService) { }
  RegisterData:any
  ngOnInit() {
    this.RegisterData= JSON.parse(localStorage.getItem('Register_User'));
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      
      localStorage.setItem('User', JSON.stringify(user));
      
      // navigate to the UserProfileComponent and pass the user data
      let navigationExtras: NavigationExtras = {
        state: {
          user: user
        }
      };
      if(user){
        this.router.navigate(['front/user/user-profile'], navigationExtras);
        this.buttonval="Logout"
      }
      
    });

  }
 
// Validation Form
  @Output() login_logout=new EventEmitter<any>()
  @Input() login:any = new FormGroup({
email:new FormControl('',
[Validators.email,
  Validators.required])
,
  password : new FormControl('',[
    Validators.required,Validators.minLength(8)
  ])
})
get get_login(){
return this.login.controls
}
Login_Logout_msg:any
invalid:string
login_click(){
  console.log("Login Data",this.login.value)
  // this.router.navigate(['front/user/registration']);
  // localStorage.setItem('User', JSON.stringify(this.login.value));
  console.log("Register data",this.RegisterData)
  if((this.RegisterData.email==this.login.value.email) && (this.RegisterData.password==this.login.value.password)){
    this.router.navigate(['/front/home']);  
    this._RegisterService.Change_btn(this.Login_Logout_msg)
    let btn=this._RegisterService.Change_btn(this.Login_Logout_msg)
    console.log(btn)
  }else{
    this.invalid = "Invalid Credential"
  }
  
}

logout(){
  localStorage.removeItem('User')
  this.router.navigate(['front/user/registration'])
}
};


