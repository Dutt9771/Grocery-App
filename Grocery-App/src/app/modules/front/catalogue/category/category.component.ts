import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products/products.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

constructor(private router:Router,private productservice:ProductsService){}
Product_Arr:any
   ngOnInit(){ window.scrollTo(0,0)
  this.GetAllCategory()
  
  this.Product_Arr=this.productservice.getProducts()
  console.log(this.Product_Arr)
}
  food: any;
  GetAllCategory(){
    this.productservice.getAllCategory().subscribe({next:(Category_Res:any) => {
      console.log("Category_Res",Category_Res.data)
      this.grocery_items=Category_Res.data
    },error:(Category_error)=>{
        console.log("Category_Error",Category_error)
    }});
  }
  grocery_items=[]
}
