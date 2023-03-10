import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SocialAuthService} from '@abacritt/angularx-social-login';
import { NavigationExtras, Router } from '@angular/router';
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
  constructor(private authService: SocialAuthService,private router:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      
      localStorage.setItem('user', JSON.stringify(user));
      
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
 

login_click(){
  console.log(this.login.value)
  this.router.navigate(['front/user/registration']);
  localStorage.setItem('User', JSON.stringify(this.login.value));
  
}

logout(){
  localStorage.removeItem('User')
  this.router.navigate(['front/user/registration'])
}
};


