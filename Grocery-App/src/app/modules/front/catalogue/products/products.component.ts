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
  this.filteredItems=this.productservice.getProducts()
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

  Add_cart(i,product){



    console.log("ShowCartArr",this.ShowcartArr)
    console.log("Product",product)
    this.existing_Product = this.ShowcartArr.find((Item:any) => {
      return Item.name.toLowerCase() == product.name.toLowerCase();
    });
    console.log("Existing Product",this.existing_Product)
    if(!this.existing_Product){
   this.clickedItem= this.filteredItems[i]
    // for(let i=0;i<this.filteredItems.length;i++){
    //   this.ProductAddobj=this.filteredItems[i]
    //   console.log("OBJ",this.ProductAddobj)
    // }
    console.log("Cart Add Product",this.filteredItems[i])
    this._cartservice.AddCart(this.filteredItems[i]).subscribe(res=>{
      console.log(
        res
      )
      this._cartservice.getItemCount()
      this._cartservice.Subtotal()
    })
    // this._cartservice.addItemToCart();
    this._cartservice.cartmsg=this.filteredItems[i].name;
    // this._cartservice.getItemCount()

    // this.rout.navigate(['/front/cart'])
    console.log(this.clickedItem)
    this._cartservice.cart.push(this.clickedItem);
    this.toastr.success('Added to cart',product.name);
    // emit updated cart data to subscribers
    this._cartservice.cartSubject.next(this._cartservice.cart);


    
  }else{
    this._cartservice.cartmsg="Item Already";
    this.toastr.info('Already Added Please Go to Cart',product.name);

    // this._cartservice.cartMsg.next(this._cartservice.cartmsg);
  }
  this.Showcart()
}

  
}
