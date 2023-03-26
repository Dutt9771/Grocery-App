import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

import { LoginComponent } from './front/user/login/login.component';
import { UserProfileComponent } from './front/user/user-profile/user-profile.component';


const routes: Routes = [
  {path:'',redirectTo:'front/home',pathMatch:'full'},
//   {path:'login',component:LoginComponent},
// {path:'front/user/registration',component:RegistrationComponent},
{path:'front',
loadChildren: () => import('./front/front.module').then(m => m.FrontModule)},
{path:'admin',
loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
// {path:'front/user/user-profile',component:UserProfileComponent,canActivate:[AuthUserGuard]},
// {path:'front/catalogue/product-details',component:ProductDetailsComponent},
// {path:'front/catalogue/product-list',component:ProductListComponent},
// {path:'front/catalogue/category',component:CategoryComponent},
{path:'**',component:ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
