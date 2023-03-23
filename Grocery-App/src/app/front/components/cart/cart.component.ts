import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private _cartservice:CartService){}
cart:any
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
quantity=1
quantitymin(index){
 
  //   console.log(this.cart[index].moneyOfferPrice)
  if(this.cart[index].quantity>1){
   this.cart[index].quantity-=1
  // }
  
  }
}
quantitymax(index){
 
    // console.log(this.cart[index].moneyOfferPrice)
   this.cart[index].quantity+=1


}

DelectProduct(id:any){
 
  this._cartservice.DelectProduct(id).subscribe((res)=>{
    if (res) {
      this.cart.splice(id-1, 1);
      console.log(this.cart);
      
    }
  })
}
}
