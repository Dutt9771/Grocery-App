import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profilenav',
  templateUrl: './profilenav.component.html',
  styleUrls: ['./profilenav.component.css']
})
export class ProfilenavComponent {
  Login_User: any;
  Register_User: any;

  constructor(private router:Router,private toastr:ToastrService) {}

  ngOnInit(){
    this.Login_User= JSON.parse(sessionStorage.getItem('Login_User'))
    this.Register_User= JSON.parse(sessionStorage.getItem('Register_User'));
  }
  logout(){
    if(this.Login_User){
    sessionStorage.removeItem('User');
    sessionStorage.removeItem('Login_User');
    sessionStorage.removeItem('Register_User')
    localStorage.removeItem('User_login_Token')
    this.router.navigate(['front/user/login'])
    // console.log(this.email)
    this.toastr.success('Logout Successfully');

    
  }
}
}
