import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { CartService } from './services/cart.service';
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
  cartItemCount = 0;
  constructor(private _cartservice:CartService,private _snackBar: MatSnackBar,private router:Router,private _RegisterService:RegisterService,private _cartService:CartService) {

    this._RegisterService.Login_Logout_msg.subscribe(res=>{
      this.Login_Logout_msg == res;
    })
  }
  RegisterData:any
  User:any
  LoginData:any
  cartMessage:any
  CountArr:any=[]
  ngOnInit(){

    // cartcounter

    // this.CountArr=(localStorage.getItem('Products_Count'))
    // console.log("CountArr",JSON.parse(this.CountArr).length)
    // this.cartItemCount=JSON.parse(this.CountArr).length
    this._cartService.cartSubject.subscribe(cart => {
      this.cartItemCount = cart.length;
    });
    this._cartService.cartMsg.subscribe(cart => {
      this.cartMessage = cart
      console.log(this.cartMessage)
      this._snackBar.open(this.cartMessage+" Added Succesfully in Cart", "Ok");
    });

    // end cartcounter
    this.LoginData= JSON.parse(sessionStorage.getItem('Login_User'));
    this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
    this.User= JSON.parse(sessionStorage.getItem('User'));
    if(this.LoginData || this.User){
      this.Login_Logout_msg="Logout"
    }
   
  }
  cart:any=[]
  ngDoCheck(){
  //   this._cartservice.ShowCart().subscribe((res)=>{
  //     this.cart=res
  //     this.cartItemCount=this.cart.length
  //     console.log("cart length",this.cart.length)
  // })
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
  // }
  // ngDoChanges(){
  //   this.LoginData= JSON.parse(sessionStorage.getItem('Login_User'));
  //   this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
  //   if(this.RegisterData){
  //     this.Registered_User=false
  //   }else{
  //     this.Registered_User=true
  //   }
  //   this.User= JSON.parse(sessionStorage.getItem('User'));
  //   if(this.LoginData || this.User){
  //     this.Login_Logout_msg="Logout"
  //   }
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


  
  Add_cart_count(){
  
    this.router.navigate(['/front/cart'])
  }
  
  
  };
  
  
  
