import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private _cartservice:CartService,private route:Router){}
cart:any=[]
// cartItems;
price:any
cartObj:any

ngOnInit(){
  this._cartservice.ShowCart().subscribe((res)=>{
    this.cart=res
    console.log(this.cart)
   
    
  })

  // this._cartservice.getCartItems().subscribe(items => {
  //   this.cartItems = items;
  //   console.log(this.cartItems)
  // });
}

//Badge

// update the cart badge count



quantity=1
Obj:any
quantitymin(index){
 
  //   console.log(this.cart[index].moneyOfferPrice)
  if(this.cart[index].quantity>1){
   this.cart[index].quantity-=1
  //  console.log(this.cart)
  // }
  
  }
}
quantitymax(index){
 
    // console.log(this.cart[index].moneyOfferPrice)
   this.cart[index].quantity+=1
  //  console.log(this.cart)
  // this.ShowCartTotal(index)
  // this.Price=this.cart[index].quantity*this.cart[index].moneyOfferPrice
//   this.subtotal.push(this.Price)
// console.log(this.subtotal)
  // this.Obj={
  // index:{
  //   "Price":this.Price
  // }}

}
// console.log("this.Obj.index.Price",this.Obj.index.Price)
GST:any
Total:any
Subtotal() {
  let subtotal:any = 0;
  for (let i = 0; i < this.cart.length; i++) {
    subtotal += this.cart[i].quantity * this.cart[i].moneyOfferPrice;
  }
  this.GST=subtotal*0.18;
  this.Total=subtotal+this.GST
  return subtotal;

}



// Price:any
// totalPrice:any
// ShowCartTotal(){
//   console.log(this.Price)
//   this.totalPrice+=this.price
// }

DelectProduct(id:any){
 
  this._cartservice.DelectProduct(id).subscribe((res)=>{
    if (res) {
      this.cart.splice(id-1, 1);
      console.log(this.cart);
      
    }
  })
}

Checkout(){
  this._cartservice.setCartTotal(this.Total);
  this.route.navigate(['/front/checkout'])
}


}
