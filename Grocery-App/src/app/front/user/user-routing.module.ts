import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from 'src/app/auth-user.guard';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../Dashboard/home/home.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  {path:'user-profile',component:UserProfileComponent,canActivate:[AuthUserGuard]},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'**',component:ErrorPageComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
