import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'front/user/registration',component:RegistrationComponent},
{path:'front/user/user-profile',component:UserProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
