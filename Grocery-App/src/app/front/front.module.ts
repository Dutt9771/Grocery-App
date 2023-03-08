import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FrontRoutingModule } from './front-routing.module';

import { CategoryComponent } from './catalogue/category/category.component';
import { CatalogueModule } from './catalogue/catalogue.module';



@NgModule({
  declarations: [
  
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
