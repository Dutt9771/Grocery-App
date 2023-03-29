import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from 'src/app/auth-user.guard';
import { ErrorPageComponent } from 'src/app/shared/components/error-page/error-page.component';
import { ContactUsComponent } from '../../../shared/components/contact-us/contact-us.component';
import { HomeComponent } from '../../../shared/components/home/home.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { LoginComponent } from './login/login.component';
import { ManageaddressComponent } from './manageaddress/manageaddress.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'manageaddress', component: ManageaddressComponent },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: ErrorPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
