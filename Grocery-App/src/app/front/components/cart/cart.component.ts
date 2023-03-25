import { group } from '@angular/animations';
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


groupedProducts: any[] = [];
cartlength:any
ngOnInit(){
  this._cartservice.ShowCart().subscribe((res)=>{
    this.cart=res
    console.log(this.cart.length)
   
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
    console.log(this.groupedProducts,"CartLength")
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
Subtotal_Per_Prod:any
quantitymin(index,productindex){
  // console.log("Quantity",this.groupedProducts[index].cart[productindex].quantity);
  //   console.log(this.cart[index].moneyOfferPrice)
  if(this.groupedProducts[index].cart[productindex].quantity>1){
    this.groupedProducts[index].cart[productindex].quantity-=1  
  }
}
quantitymax(index,productindex){
 
    // console.log(this.cart[index].moneyOfferPrice)
    this.groupedProducts[index].cart[productindex].quantity+=1
  

}

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



  

// for Subtotal


Subtotal_Per_Category(group) {
  let total = 0;
let subtotal=0;
    // console.log("group",group.cart)
    for (let i=0;i<group.cart.length;i++) {
      let itemTotal = group.cart[i].moneyOfferPrice * group.cart[i].quantity;
      subtotal += itemTotal;
    }
    // console.log(`Subtotal for ${cart.category}: ${subtotal} ${cart.cart[0].moneyOfferPrice}`);
    return total += subtotal;
    // console.log(`Total: ${total} ${cart[0].cart[0].money}`);
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



