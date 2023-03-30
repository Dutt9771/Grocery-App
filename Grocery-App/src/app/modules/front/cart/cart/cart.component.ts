import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:any[]=[]
  constructor(private _productservice:ProductsService,private _cartservice:CartService,private route:Router){
    this._cartservice.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }
  cart:any=[]
  // cartItems;
  price:any
  cartObj:any
  
  filteredItems:any=[]
  groupedProducts: any[] = [];
  cartlength:any
  cartEmptyShow=true
  ngOnInit(){
   
    this.filteredItems=this._productservice.getProducts()
  
    this._cartservice.ShowCart().subscribe((res)=>{
      this.cart=res
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
      console.log(this.groupedProducts,"CartLength")
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
    //   console.log(this.cart[index].moneyOfferPrice)
    if(this.groupedProducts[index].cart[productindex].quantity>1){
      this.groupedProducts[index].cart[productindex].quantity-=1  
      this.cart[productindex].quantity=this.groupedProducts[index].cart[productindex].quantity
      console.log("cart",this.cart)
      this._cartservice.EditCart(this.cart[productindex]).subscribe((cart)=>{
        console.log("cart in Service",cart)
        console.log("Product Index",productindex)
        console.log("cart[productindex].quantity",this.groupedProducts[index].cart[productindex].quantity)
      })
      
      // console.log("Subtotal From Cart",this.Subtotal())
  
  }
  }
  quantitymax(index,productindex){
   
      // console.log(this.cart[index].moneyOfferPrice)
      this.groupedProducts[index].cart[productindex].quantity+=1
      this._cartservice.ShowCart().subscribe((cart)=>{
        this.cart[productindex].quantity=this.groupedProducts[index].cart[productindex].quantity
        console.log("cart[productindex].quantity",this.groupedProducts[index].cart[productindex].quantity)
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
          subtotal += this.groupedProducts[i].cart[j].quantity * this.groupedProducts[i].cart[j].moneyOfferPrice;
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
        let itemTotal = group.cart[i].moneyOfferPrice * group.cart[i].quantity;
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
  cartItemCount:number=0
  clickedItem:any=[]
  DelectProduct(id:any,index:any,productindex:any,product){
    
      
      this.clickedItem= this.filteredItems[id]
      // if(this.groupedProducts[index].cart[productindex].quantity
      this._cartservice.DelectProduct(id).subscribe((res)=>{
        if (res) {
          console.log("Deleted Group Product Arr",this.groupedProducts[index].cart.filter((product)=>product.id != id))
          
        this._cartservice.cartSubject.next(this._cartservice.cart);
        this._cartservice.removeItemFromCart();
        this._cartservice.removeFromCart(product);
      return this.groupedProducts[index].cart.splice(productindex,1)
      // this.groupedProducts[index].cart[productindex];
      
        // this.cart.splice(id-1, 1);
        // console.log("Res",res)
        // this._cartservice.cart.splice(this.clickedItem,1);
        // console.log("Deleted Arr in the ClikkedItem Arr",this._cartservice.cart.splice(this.clickedItem,1))
        // console.log("cart",this.cart);
        // console.log("cart by Id",this.cart[id]);
        
        
      }
      this.Subtotal()
      // this.CartEmptyShow_Data()

    //   if(res && this.groupedProducts.length==1){
    //     console.log('REs')
    //     this.route.navigate(['/home'])
  
    // }
    // console.log("groupedProducts.length",this.groupedProducts.length)
    })
    
   
  }
  
  
  Checkout(){
    this._cartservice.setCartTotal(this.Total);
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



