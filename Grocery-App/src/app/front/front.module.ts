import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FrontRoutingModule } from './front-routing.module';

import { CategoryComponent } from './catalogue/category/category.component';
import { CatalogueModule } from './catalogue/catalogue.module';
import { HomeComponent } from './Dashboard/home/home.component';
import { ContactUsComponent } from './Dashboard/contact-us/contact-us.component';



@NgModule({
  declarations: [
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CatalogueModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class FrontModule { }
