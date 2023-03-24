import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ManageaddressComponent } from './manageaddress/manageaddress.component';
import { OrdersComponent } from './orders/orders.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfilenavComponent } from './profilenav/profilenav.component';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [
    UserProfileComponent,
    LogoutComponent,
    ManageaddressComponent,
    OrdersComponent,
    ChangepasswordComponent,
    ProfilenavComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
  ]
})
export class UserModule { }
