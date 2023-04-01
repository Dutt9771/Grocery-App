import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      const Login_User= JSON.parse(sessionStorage.getItem('Login_User'))
      const user = sessionStorage.getItem('User');
      const RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
      if(Login_User){
        return true;
      }
      alert("Please Login")
      this.route.navigate(['/front/user/login'])
      return false;
  }
  
}