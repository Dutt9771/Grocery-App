import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FrontRoutingModule } from './front-routing.module';

import { CategoryComponent } from './catalogue/category/category.component';
import { CatalogueModule } from './catalogue/catalogue.module';
import { HomeComponent } from './Dashboard/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';




@NgModule({
    declarations: [
        ContactUsComponent,
        CartComponent,
        CheckoutComponent,
        SuccessComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent
    ],
    exports: [HeaderComponent, HomeComponent, FooterComponent],
    imports: [
        CommonModule,
        FrontRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CatalogueModule,
        IvyCarouselModule
    ]
})
export class FrontModule { }
