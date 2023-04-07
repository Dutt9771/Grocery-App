import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { RegisterService } from 'src/app/shared/services/register/register.service';
import { UserService } from 'src/app/shared/services/user/user.service';

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
  user_login:any
  constructor(private _userService:UserService,private cookieService: CookieService,private authService: SocialAuthService,private toastr:ToastrService,private router:Router,private _RegisterService:RegisterService,private _authservice:AuthService) { }
  RegisterData:any
  ngOnInit() {
    // this.toastr.success('Login Successfully');
    this.User_Login_Form()
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
  Get_User_Details(){
    this._userService.Get_User_Details().subscribe({next:(User_details_res)=>{
      console.log("User_Details",User_details_res.data)
      sessionStorage.setItem('User_Details',JSON.stringify(User_details_res.data))
    },error:(User_details_error)=>{
      console.log("Getuserdetail_error",User_details_error)
    }})

  }
// Validation Form
  @Output() login_logout=new EventEmitter<any>()
  User_Login_Form(){

    this.user_login = new FormGroup({
      username:new FormControl('',
      [Validators.required])
      ,
  password : new FormControl('',[
    Validators.required,Validators.minLength(8)
  ])
})
}
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
      console.log("User_Login_Token",this.User_Login_Token.data.token)
      // localStorage.setItem("User_login_Token",JSON.stringify(this.User_Login_Token.data))
      this.cookieService.set('User_Login_Token', this.User_Login_Token.data.token,{ expires: 1, sameSite: 'Lax'});
      sessionStorage.setItem("Login_User",JSON.stringify(this.user_login.value))
      this.toastr.success('Login Successfully');
      this.Get_User_Details()
      this.router.navigate(['/home'])

    }
  },error:(Login_error)=>{ 
    console.log("Register_error.status",Login_error.status)
    console.log("Register_error.status",Login_error)
    if(Login_error.status){
      this.errorMessage = Login_error.error.message;
      // this.errorMessage="Incorrect Password"
      this.toastr.error(Login_error.error.message);
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


