import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { RegisterService } from 'src/app/shared/services/register/register.service';

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
  errorMessage: string;
  constructor(private authService: SocialAuthService,private router:Router,private _RegisterService:RegisterService,private _authservice:AuthService) { }
  RegisterData:any
  ngOnInit() {
    this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
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
  @Input() user_login:any = new FormGroup({
username:new FormControl('',
[Validators.required])
,
  password : new FormControl('',[
    Validators.required,Validators.minLength(8)
  ])
})
get get_user_login(){
return this.user_login.controls
}
Login_Logout_msg:string
invalid:string
User_Login_Token:any
Save_User_Login(){
  // console.log("user_login Value",this.user_login.value)
  this._authservice.User_Login(this.user_login.value).subscribe({next:(User_Login_res)=>{
    if(User_Login_res){
      console.log("User_Login_res",User_Login_res)
      this.User_Login_Token=User_Login_res
      console.log("User_Login_Token",this.User_Login_Token.data)
      localStorage.setItem("User_login_Token",JSON.stringify(this.User_Login_Token.data))
      sessionStorage.setItem("Login_User",JSON.stringify(this.user_login.value))
      this.router.navigate(['/home'])

    }
  },error:(Login_error)=>{ 
    console.log("Register_error.status",Login_error.status)
    console.log("Register_error.status",Login_error)
    if(Login_error.status){
      this.errorMessage = Login_error.error.message;
      // this.errorMessage="Incorrect Password"
      // this.errorMessage = Login_error.error.error.errors[0].message;
      // console.log('error caught in component',Login_error.error.error.errors[0].message)
    }
  }})

 
//   console.log("Login Data",this.login.value)
//   // this.router.navigate(['front/user/registration']);
//   // localStorage.setItem('User', JSON.stringify(this.login.value));
//   console.log("Register data",this.RegisterData)
//   if(this.RegisterData){

 
//   if((this.RegisterData.email==this.login.value.email) && (this.RegisterData.password==this.login.value.password)){
//     this._RegisterService.get_Login_data(this.login.value)
//     this.router.navigate(['/front/home']);  
//     // this._RegisterService.Change_btn(this.Login_Logout_msg)
//     // let btn=this._RegisterService.Change_btn(this.Login_Logout_msg)
//     let btn=this._RegisterService.Login_Logout_msg.next("Logout")
//     console.log(btn)
//   }else{
//     this.invalid = "Invalid Credential Please Register"
//   }
// }else{
//   alert("Please register")
//   this.router.navigate(['/front/user/registration']);  
// }
}

logout(){
  sessionStorage.removeItem('User')
  this.router.navigate(['front/user/registration'])
}
};


