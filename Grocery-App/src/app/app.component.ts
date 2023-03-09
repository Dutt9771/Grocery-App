import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){
  }
  
  ngOnInit(){
    console.log(this.loginuser)
  }
  title = 'Grocery-App';
  login_logout:boolean |undefined;
  // logout(loggedInuser: boolean) {
    //   this.LoginService.log_out(loggedInuser)    
    //   }
   ngOnChange(){
    
   } 
  loginuser = localStorage.getItem('User')

  logout(){
    localStorage.removeItem('User')
    this.router.navigate(['front/user/registration'])
    console.log(this.loginuser)
  }
  };
  
  
  
