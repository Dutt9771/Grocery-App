import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './Dashboard/home/home.component';

import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'user',loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
{path:'catalogue',loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)},
{path:'**',component:ErrorPageComponent}]
// {path:'front/user/registration',component:RegistrationComponent},
// {path:'front/user/user-profile',component:UserProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
