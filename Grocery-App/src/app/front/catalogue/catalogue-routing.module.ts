import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'product-details',component:ProductDetailsComponent},
  {path:'products-list/:category',component:ProductListComponent},
  {path:'category',component:CategoryComponent},
  {path:'**',component:ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
