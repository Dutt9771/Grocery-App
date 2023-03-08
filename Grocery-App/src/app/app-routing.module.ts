import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthUserGuard } from './auth-user.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CategoryComponent } from './front/catalogue/category/category.component';
import { ProductDetailsComponent } from './front/catalogue/product-details/product-details.component';
import { ProductListComponent } from './front/catalogue/product-list/product-list.component';

import { LoginComponent } from './front/user/login/login.component';
import { RegistrationComponent } from './front/user/registration/registration.component';
import { UserProfileComponent } from './front/user/user-profile/user-profile.component';


const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
{path:'front/user/registration',component:RegistrationComponent},
{path:'front/user/user-profile',component:UserProfileComponent,canActivate:[AuthUserGuard]},
{path:'front/catalogue/product-details',component:ProductDetailsComponent},
{path:'front/catalogue/product-list',component:ProductListComponent},
{path:'front/catalogue/category',component:CategoryComponent},
{path:'**',component:ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
