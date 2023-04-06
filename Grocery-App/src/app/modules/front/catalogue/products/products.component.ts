import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(private _cartservice:CartService,private productservice:ProductsService,private toastr:ToastrService){}
filteredItems:any=[]
ngOnInit(){
  this.GetProducts()
  // this.filteredItems=this.productservice.getProducts()
}
  productArray:any[] = []
  ProductAddobj:any;
  clickedItem:any=[]
  ShowcartArr:any=[]
  existing_Product:any
  Showcart(){
    this._cartservice.ShowCart().subscribe((res)=>{
      this.ShowcartArr=res
    })
    console.log("ShowcartArr",this.ShowcartArr)
    return this.ShowcartArr
  }
  GetProducts(){
    this.productservice.getALLProducts().subscribe({next:(get_all_products_res)=>{
      console.log("get_all_products_res",get_all_products_res)
      this.filteredItems=get_all_products_res.data
      console.log("allProducts",this.filteredItems)
    },error:(get_all_products_error)=>{
      console.log("get_all_products_error",get_all_products_error)
    }})
  }
  quantity=1;
  product_quantity={
    quantity:this.quantity,
  }
  Add_cart(i,product){


    console.log("ShowCartArr",this.ShowcartArr)
    console.log("Product",product)
    this.existing_Product = this.ShowcartArr.find((Item:any) => {
      return Item.title === product.title;
    });
    console.log("Existing Product",this.existing_Product)
    if(!this.existing_Product){
    console.log("id",i)
    console.log("Filtered Item Arr",this.filteredItems[i])
    this.ProductAddobj= this.filteredItems[i]
    this.ProductAddobj=Object.assign(this.filteredItems[i],this.product_quantity)

     // for(let i=0;i<this.filteredItems.length;i++){
     //   this.ProductAddobj=this.filteredItems[i]
     //   console.log("OBJ",this.ProductAddobj)
     // }
     console.log("Cart Add Product",this.filteredItems[i])


     this._cartservice.cartmsg=this.filteredItems[i].name;

 
     // this.rout.navigate(['/front/cart'])

     this._cartservice.cart.push(this.ProductAddobj);
     // emit updated cart data to subscribers
     this._cartservice.cartSubject.next(this._cartservice.cart);

    this._cartservice.AddCart(this.ProductAddobj).subscribe(res=>{
      console.log(
        res
      )  
      this.toastr.success('Added to cart',product.name);
      this._cartservice.getItemCount()
      this._cartservice.Subtotal()
    })  

 

    
  }else{
    this._cartservice.cartmsg="Item Already";
    this.toastr.info('Already Added Please Go to Cart',product.name);

    // this._cartservice.cartMsg.next(this._cartservice.cartmsg);
  }
  this.Showcart()
}

  
}
