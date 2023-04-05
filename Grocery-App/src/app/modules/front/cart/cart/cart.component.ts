import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:any[]=[]
  loading:boolean=true
  constructor(private _productservice:ProductsService,private _cartservice:CartService,private route:Router,private toastr:ToastrService){
   
  }
  cart:any=[]
  // cartItems;
  price:any
  cartObj:any
  
  filteredItems:any=[]
  groupedProducts: any[] = [];
  cartlength:any
  cartEmptyShow=true
  data:any
  dateFormat:any
  
  ngOnInit(){
    
    let date = new Date()
    var getYear = date.toLocaleString("default", { year: "numeric" });
    var getMonth = date.toLocaleString("default", { month: "2-digit" });
var getDay = date.toLocaleString("default", { day: "2-digit" });
    this.dateFormat = getYear + "-" + getMonth + "-" + getDay;
console.log("dateFormat",JSON.stringify(this.dateFormat));
    this.filteredItems=this._productservice.getProducts()
  
    this._cartservice.ShowCart().subscribe((res)=>{
      this.cart=res
      setTimeout(() => {
        this.loading=false
      }, 500);
      console.log("cart",this.cart)
      // this._cartservice.cartSubject.subscribe(cart => {
      //   this.cartItemCount = cart.length;
      // });
      
      this.groupedProducts = this.cart.reduce((acc, product) => {
        
        const existingCategory = acc.find(group => group.category === product.category);
        if (existingCategory) {
          existingCategory.cart.push(product);
          // this.groupedProducts=this.cartlength
        } else {
          acc.push({ category: product.category, cart: [product] });
        }
        return acc;
      }, []);
      console.log(this.groupedProducts,"groupedProducts")
      
     })
    
  
  
  
  
    // this._cartservice.getCartItems().subscribe(items => {
    //   this.cartItems = items;
    //   console.log(this.cartItems)
    // });
  }
 
  ngAfterViewInit(){
    this.CartEmptyShow_Data()
    this._cartservice.ShowCart().subscribe((res)=>{
      this.cart=res
      console.log("cart",this.cart)
    this._cartservice.cartSubject.subscribe(res => {
      
      
      console.log("Before Cart",res)
      this.cart.splice(1,1);
      console.log("After Cart",this.cart)
  });
    })
    console.log("Subtotal From Cart",this.Subtotal())
   }
  //Badge
  
  // update the cart badge count
  
  
  
  quantity=1
  Obj:any
  Subtotal_Per_Prod:any
  quantitymin(index,productindex){
    // console.log("Quantity",this.groupedProducts[index].cart[productindex].quantity);
    console.log(this.cart[productindex].amount)

    if(this.groupedProducts[index].cart[productindex].quantity>1){
      this.groupedProducts[index].cart[productindex].quantity-=1  
      this.cart[productindex].quantity=this.groupedProducts[index].cart[productindex].quantity
      // console.log("cart",this.cart)
      this._cartservice.EditCart(this.cart[index]).subscribe((cart)=>{
        // console.log("cart in Service",cart)
        // console.log("Product Index",productindex)
        console.log("cart[productindex].quantity",this.groupedProducts[index].cart[productindex].quantity)
      })
      
      // console.log("Subtotal From Cart",this.Subtotal())
  
  }
  }
  quantitymax(index,productindex){
   
      console.log(this.cart[productindex].amount)
      this.groupedProducts[index].cart[productindex].quantity+=1
      this._cartservice.ShowCart().subscribe((cart)=>{
        this.cart[productindex].quantity=this.groupedProducts[index].cart[productindex].quantity
        // console.log("cart[productindex].quantity",this.groupedProducts[index].cart[productindex].quantity)
        this._cartservice.EditCart(this.cart[productindex]).subscribe((cart)=>{
          console.log("cart in Service",cart)})
        })
        
        // this.cart[productindex].quantity=this.groupedProducts[index].cart[productindex].quantity
  
  
  }
  
  GST:any
  Total:any
  
  Subtotal():number {
    let subtotal:any = 0;
  // console.log("GroupProducts In Subtotal",this.groupedProducts)
    if(this.groupedProducts.length){
  
      for (let i = 0; i < this.groupedProducts.length; i++) {
        for(let j=0;j<this.groupedProducts[i].cart.length;j++){
          // console.log("Cart in Subtottal",this.cart[i])
          // subtotal += this.groupedProducts[i].cart[j].amount;
          subtotal += this.groupedProducts[i].cart[j].quantity * this.groupedProducts[i].cart[j].amount;
        }
    }
    this.GST=subtotal*0.18;
    this.Total=subtotal+this.GST
    // console.log("Subtotal Function =" ,subtotal)
    this._cartservice.updateSubtotal(subtotal);
    return subtotal;
  }else{
    subtotal=0
    return subtotal;
  }
    
  }
  
  // for Subtotal
  
  
  Subtotal_Per_Category(group) {
    let total = 0;
  let subtotal=0;
      // console.log("group",group.cart)
      for (let i=0;i<group.cart.length;i++) {
        let itemTotal = group.cart[i].amount
        subtotal += itemTotal;
      }
      // console.log(`Subtotal for ${cart.category}: ${subtotal} ${cart.cart[0].moneyOfferPrice}`);
      return total += subtotal;
      // console.log(`Total: ${total} ${cart[0].cart[0].money}`);
    }
  CartEmptyShow_Data(){
    if(!this.cart.length){
      this.cartEmptyShow=false
      console.log("cartEmptyShow",this.cartEmptyShow)
    }else{
              this.cartEmptyShow=true
              console.log("cartEmptyShow",this.cartEmptyShow)
            }
  }
  cartItemCount:any
  clickedItem:any=[]

  DelectProduct(id:any,index:any,productindex:any,product){
    
      
      this.clickedItem= this.filteredItems[id]

      this._cartservice.DelectProduct(id).subscribe((res)=>{
        if (res) {
          console.log("Deleted Group Product Arr",this.groupedProducts[index].cart.filter((product)=>product.id != id))
          this._cartservice.ShowCart().subscribe((res)=>{
            console.log("res",res) 
            this.cartItemCount=res
            // this.Cartlength=this.cartItemCount.length
            this._cartservice.cartItemCount$.next(this.cartItemCount.length);
          })
          this._cartservice.getItemCount()
        this.toastr.success('Remove to cart',product.name);

      return this.groupedProducts[index].cart.splice(productindex,1)

        
      }
      this.Subtotal()
 
    })
    
   
  }
  product:any=[]
  get_cart_data(){
for(let i=0;i<this.cart.length;i++){

 
  this.product=[{
    "product_id":  this.cart[0].id,
    "product_name": this.cart[0].title,
    "qty": this.cart[0].quantity,
    "product_amount": this.cart[0].amount,
    "discount_type": 1,
    "discount_amount": 0
}]
}
console.log("product",this.product)
return this.product
  }

  Checkout(){
    this.get_cart_data()
    this.data={
      "order_date": this.dateFormat,
      "special_note": "its special",
      "estimate_delivery_date": "2023-03-15",
      "sub_total": this.Subtotal(),
      "tax_amount": this.GST,
      "discount_amount": 0,
      "total_amount": this.Total,
      "paid_amount": this.Total,
      "payment_type": 2,
      "order_products":this.get_cart_data(),
  }
    console.log("cart",this.cart)
    this._cartservice.setCartTotal(this.Total);
  this._cartservice.Cartdata=this.data
  console.log("this._cartservice.Cartdata",this._cartservice.Cartdata)
  
  
    this.route.navigate(['/front/cart/checkout'])
  }
  
  
  
    
  
  
}  





// interface Product {
//   name: string;
//   price: number;
//   category: string;
// }

// interface GroupedProduct {
//   category: string;
//   products: Product[];
// }



