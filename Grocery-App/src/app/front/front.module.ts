import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FrontRoutingModule } from './front-routing.module';

import { CategoryComponent } from './catalogue/category/category.component';
import { CatalogueModule } from './catalogue/catalogue.module';
import { HomeComponent } from './Dashboard/home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    
    FormsModule,
    ReactiveFormsModule

  ]
})
export class FrontModule { }
