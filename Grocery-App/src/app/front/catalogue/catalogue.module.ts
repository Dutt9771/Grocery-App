import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from '../Dashboard/home/home.component';

import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    
    CarouselModule 
    
  ]
})
export class CatalogueModule { }
