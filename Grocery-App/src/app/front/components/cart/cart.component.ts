import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private _cartservice:CartService){}
cart:any=[];
cartItems;
ngOnInit(){
  // this._cartservice.ShowCart().subscribe((res)=>{
  //   this.cart.push(res)
  // })

  this._cartservice.getCartItems().subscribe(items => {
    this.cartItems = items;
    console.log(this.cartItems)
  });


  console.log(this.cart)
console.log(this.cart)
}
// quantity=1
// quantitymin(){
//   if(this.quantity>1){
//    this.quantity-=1;
//   }
// }
// quantitymax(){
  
//   this.quantity+=1;
// }

// DelectProduct(id:any){
 
//   this._cartservice.DelectProduct(id).subscribe((res)=>{
//     if (res) {
//       this.cart[0].splice(id-1, 1);
//       console.log(this.cart[0]);
      
//     }
//   })
// }
}
