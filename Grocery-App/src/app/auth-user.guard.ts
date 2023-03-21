import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      
      const user = sessionStorage.getItem('User');
      const RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
      if(user || RegisterData){
       
        return true;
      }
      alert("Please Login")
      return false;
  }
  
}
