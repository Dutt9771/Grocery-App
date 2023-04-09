import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CartService } from 'src/app/shared/services/cart/cart.service';
import { EncryptionService } from 'src/app/shared/services/encryption/encryption.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productArray:any[] = []

  product_item:any
  filteredItems:any=[]
  category_path:any
  product_name:any
  product_id:any
    constructor(private _encryptionservice:EncryptionService,private router:ActivatedRoute,private _productsservice:ProductsService,private _cartservice:CartService,private route:Router,private toastr:ToastrService){
  this.router.paramMap.subscribe(params=>{
    this.product_id=params.get('id')
    this.product_name=params.get('slug')

    console.log("params.get('id')",params.get('id'))
    console.log("params.get('slug')",params.get('slug'))
  })
  // console.log("product_name",this.product_name)
}
ShowcartArr:any=[]
quantity=1;
GetProductByProductId(encryption){
  this._productsservice.getProductByProductId(encryption).subscribe({next:(Product_Res:any) => {
    this.filteredItems.push(Product_Res.data)
    console.log("Product_Res",this.filteredItems)
  },error:(Product_error)=>{
      console.log("Product_error",Product_error)
  }});
}
encryption_data:string
encryption(id){
  this._encryptionservice.Encryption(id).subscribe({next:(encryption_res)=>{
    console.log("encryption_res",encryption_res)
    this.encryption_data=encryption_res.data
     console.log("encryption_data",this.encryption_data)
     this.GetProductByProductId(this.encryption_data)
  },error:(encryption_error)=>{
    console.log("encryption_error",encryption_error)
  }})
}
Customer_Id:number
User_Details:any
ngOnInit() {
  this.route.events.subscribe((res:any)=>{
  if(res.url){
    window.scrollTo(0, 0);
  }
})
    this.User_Details=JSON.parse(sessionStorage.getItem('User_Details'))
    this.Customer_Id=this.User_Details.id
    console.log("Customer_Id",this.Customer_Id)
    this.Showcart()
    this.encryption(this.product_id)
    // console.log("User_Details",this.User_Details)
        console.log("Product_item",this.filteredItems)
        console.log("Product_item",this.filteredItems)
     
  }

  value:any
  x:any
  // quantitymax(){
  //     this.product_quantity.quantity+=1
     

  //     this.filteredItems[0].amount=this.value
  //     console.log(this.filteredItems[0].amount)
      
    
  //   this.x= this.value* this.product_quantity.quantity;
  
  //   }
  //   quantitymin(){
  //     if(this.product_quantity.quantity>1){
  //       // console.log(this.product_quantity.quantity)
  //       this.product_quantity.quantity-=1
  //       this.value=this.product_quantity.quantity;
  //         for(let i=0;i<this.filteredItems.length;i++){
    
  //           this.filteredItems[i].amount=this.filteredItems[i].amount/(this.product_quantity.quantity)
  //           this.ProductObj=this.filteredItems[i]
            
  //         }
  //       }
  //   }
    product_quantity={
      customer_id:3,
      quantity:this.quantity,
    }
    
    ProductObj:any
ProductAddobj:any;
Product_Count_Obj:any=[]
QuantityErrMsg:string=''
existing_Product:any=[]
Find_Customer_Cart_Arr:any
Showcart(){
  this._cartservice.ShowCart().subscribe((res)=>{
    this.ShowcartArr=res
    this.Find_Customer_Cart=this.ShowcartArr.find((item)=>item.id=== this.Customer_Id)
    console.log("Find Customer",this.Find_Customer_Cart)
    this.Find_Customer_Cart_Arr=this.Find_Customer_Cart.items
    console.log("Find_Customer_Cart_Arr",this.Find_Customer_Cart_Arr)
  })
  console.log("ShowcartArr",this.ShowcartArr)
  return this.ShowcartArr
}
product_Existing:any
Find_Customer_Cart:any

  Add_cart(product:any){
  
      console.log("ShowCartArr",this.ShowcartArr)
      console.log("Product",product)
    
      this.existing_Product=this.Find_Customer_Cart_Arr.find((item)=>item.title.toLowerCase()===product.title.toLowerCase())
      console.log("Existing Product",this.existing_Product)
    
// for(let i=0;i<this.Find_Customer_Cart_Arr.length;i++){
//   if(this.Find_Customer_Cart_Arr[i].id==product.id){
//     this.existing_Product=this.Find_Customer_Cart.items[i]
//     console.log("this.Find_Customer_Cart.items[i]",this.Find_Customer_Cart.items[i].id)
//     console.log("this.Find_Customer_Cart.items[i]",this.Find_Customer_Cart.items[i])
//     console.log("this.existing_Product",this.existing_Product)
//   }
// }


    
    if(this.product_quantity.quantity>0 && !this.existing_Product){
      console.log("Show Cart Arr",this.ShowcartArr)
      
      
      for(let i=0;i<this.filteredItems.length;i++){
        this.ShowcartArr
      // this.filteredItems[i].moneyOfferPrice=this.product_quantity.quantity
      this.ProductObj=this.filteredItems[i]
      this.ProductAddobj=Object.assign(this.ProductObj,this.product_quantity)
      console.log("OBJ",this.ProductAddobj)
    }

    this._cartservice.AddCartUserWise(this.Customer_Id,this.ProductAddobj).subscribe(res=>{
      console.log(
        res
        )
        this.Showcart()
        this._cartservice.getItemCount()
        this._cartservice.Subtotal()
      })
    
    
    // const sampleData = {
    //   customer_id: this.Customer_Id,
    //   items: [
    //   ]
    // }
    // this._cartservice.AddCart(sampleData).subscribe(res=>{
    //   console.log(
    //     res
    //     )
    //     this._cartservice.getItemCount()
    //     this._cartservice.Subtotal()
    //   })

    

      
      // this._cartservice.addItemToCart();
      // this.Product_Count_Obj.push(this.ProductAddobj)
      // localStorage.setItem('Products_Count',JSON.stringify(this.Product_Count_Obj))


      this._cartservice.cartmsg=this.filteredItems[0].name;
    // this.route.navigate(['/front/cart'])
    console.log("Filtered Item",this.filteredItems)
    this._cartservice.cart.push(this.filteredItems);
    // console.log("filteredItems.name",this.filteredItems[0].name)
    

    // emit updated cart data to subscribers
    // this._cartservice.cartMsg.next(this._cartservice.cartmsg);
    this.toastr.success(' Added to cart',product.title);

    
  }else if(this.existing_Product){
    this.QuantityErrMsg="Product Is Existing"
for(let i=0;i<this.Find_Customer_Cart.items.length;i++){
  this.Find_Customer_Cart.items[i]
  if(this.Find_Customer_Cart.items[i]==product){
    this.Find_Customer_Cart.items[i].quantity=this.Find_Customer_Cart.items[i].quantity+1
    this.product_quantity.quantity=this.Find_Customer_Cart.items[i].quantity

    console.log("this.Find_Customer_Cart.items[i]",product)
    console.log("this.Find_Customer_Cart.items[i].quantity",this.Find_Customer_Cart.items[i].quantity)
    console.log("this.product_quantity.quantity",this.product_quantity.quantity)
  }
}    
console.log("Find_Customer_Cart",this.Find_Customer_Cart)

    this.existing_Product.quantity=this.existing_Product.quantity+1;
    this.product_quantity.quantity=this.existing_Product.quantity
    this.toastr.info('Already Added Please Go to Cart',product.title);


      this._cartservice.EditCart(this.Customer_Id,this.Find_Customer_Cart).subscribe((cart)=>{
        // console.log("cart in Service",cart)
        // console.log("Product Index",productindex)
        console.log("cart",cart)
      })
   
    }
  else{
    this.QuantityErrMsg="Please Enter Valid Quantity"
    this.toastr.error('Please Enter Valid Quantity');
  }
  this.Showcart()
  }


}
