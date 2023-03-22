import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from '../Dashboard/home/home.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductsComponent,
    
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    IvyCarouselModule,
    FormsModule,
    CarouselModule,
    HttpClientModule
    
  ]
})
export class CatalogueModule { }
