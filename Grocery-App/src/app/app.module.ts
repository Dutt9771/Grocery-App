import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { FrontModule } from './front/front.module';
import { ErrorPageComponent } from './error-page/error-page.component';

import { RegistrationComponent } from './front/user/registration/registration.component';
import { LoginComponent } from './front/user/login/login.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { AuthUserGuard } from './auth-user.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { CarouselModule } from 'ngx-owl-carousel-o';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CatalogueModule } from './front/catalogue/catalogue.module';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './front/Dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    RegistrationComponent,
    LoginComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AdminModule,
    FrontModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgbModule,
    HttpClientModule,
    CatalogueModule,
    CarouselModule,
    CarouselModule,
    IvyCarouselModule,
    HttpClientModule,
    MatSnackBarModule,
    MatExpansionModule
  
    
    
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '625408325836-r5q6i5chqvi42d4gone2ef0a5hetmk4k.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('610808490382171'),
        },
      ],
      onError: (err: any) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  },AuthUserGuard,
  {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
