import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productArray:any[] = [
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice1",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 8,
      price:12,
      money: "USD",
    },
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice2",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 9,
      price:12,
      money: "USD",
    },
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice3",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 10,
      price:12,
      money: "USD",
    },
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice4",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 10,
      money: "USD",
      price:20,
    },
    {
      imageurl:"fruits.jpg",
      category: "fruits",
      name: "Fruits",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 2,
      price:5,
      money: "USD",
    },
    {
      imageurl:"fruits.jpg",
      category: "fruits",
      name: "Fruits",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"fruits.jpg",
      category: "fruits",
      name: "Fruits",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"fruits.jpg",
      category: "fruits",
      name: "Fruits",
      weight: "500 grams",
      sellerName: "Vishvash Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "vegetables",
      name: "Cabbage",
      weight: "500 grams",
      sellerName: "Abhay Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "vegetables",
      name: "LadiesFinger",
      weight: "500 grams",
      sellerName: "Ajay Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "vegetables",
      name: "Potato",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "vegetables",
      name: "Tomato",
      weight: "500 grams",
      sellerName: "Vishnu Farms Inc.",
      moneyOfferPrice: 5,
      price:12,
      money: "USD",
    },
  ]

  product_item:any
  filteredItems:any
  category_path:any
  product_name:any
constructor(private router:ActivatedRoute,private _productsservice:ProductsService,private _cartservice:CartService,private route:Router){
  this.router.paramMap.subscribe(params=>{
    this.product_name=params.get('product_name')
  })
  // console.log("product_name",this.product_name)
}
ShowcartArr:any=[]
quantity=1;
  ngOnInit() {
    this.filteredItems=this._productsservice.getProducts()
    this._cartservice.ShowCart().subscribe((res)=>{
      this.ShowcartArr=res
    })
    
    // this.route.paramMap.subscribe(params => {
    //   this.product_path= params.get('product');
    // })
    // console.log(this.category_path)
  
  // if(this.category_path){

    this.router.paramMap.subscribe(params => {
      const product = params.get('product_name');
      // console.log(product)    
          this.filteredItems = this.filteredItems.filter(filteredItems => filteredItems.name.toLowerCase() === product);
          this.product_item=product

        console.log("Product_item",this.filteredItems)
      });
    // }else{
    //   this.Filter_Category(this.selectedCategory);
    // }
  // }
    
  }

  value:any
  x:any
  quantitymax(){
      this.product_quantity.quantity+=1
     

      // this.filteredItems[0].moneyOfferPrice=this.value
    //   console.log(this.filteredItems[0].moneyOfferPrice)
      
    
    // this.x= this.value* this.product_quantity.quantity;
  
    }
    quantitymin(){
      if(this.product_quantity.quantity>1){
        // console.log(this.product_quantity.quantity)
        this.product_quantity.quantity-=1
        // this.value/=this.product_quantity.quantity;
          // for(let i=0;i<this.filteredItems.length;i++){
    
          //   this.filteredItems[i].moneyOfferPrice=this.filteredItems[i].moneyOfferPrice/(this.product_quantity.quantity)
          //   this.ProductObj=this.filteredItems[i]
            
          // }
        }
    }
    product_quantity={
      quantity:this.quantity,
    }
    
    ProductObj:any
ProductAddobj:any;
Product_Count_Obj:any=[]
QuantityErrMsg:string=''
existing_Product:any=[]
  Add_cart(product){

    
console.log("ShowCartArr",this.ShowcartArr)
console.log("Product",product)
this.existing_Product = this.ShowcartArr.find((Item:any) => {
  return Item.name.toLowerCase() === product.name.toLowerCase();
});
console.log("Existing Product",this.existing_Product)
    if(this.product_quantity.quantity>0 && !this.existing_Product){
      console.log("Show Cart Arr",this.ShowcartArr)
      
      for(let i=0;i<this.filteredItems.length;i++){
        this.ShowcartArr
      // this.filteredItems[i].moneyOfferPrice=this.product_quantity.quantity
      this.ProductObj=this.filteredItems[i]
      this.ProductAddobj=Object.assign(this.ProductObj,this.product_quantity)
      console.log("OBJ",this.ProductAddobj)
    }
    this._cartservice.AddCart(this.ProductAddobj).subscribe(res=>{
      console.log(
        res
        )
      })
      this._cartservice.addItemToCart();
      // this.Product_Count_Obj.push(this.ProductAddobj)
      // localStorage.setItem('Products_Count',JSON.stringify(this.Product_Count_Obj))


      this._cartservice.cartmsg=this.filteredItems[0].name;
    // this.route.navigate(['/front/cart'])
    console.log("Filtered Item",this.filteredItems)
    this._cartservice.cart.push(this.filteredItems);
    // console.log("filteredItems.name",this.filteredItems[0].name)
    

    // emit updated cart data to subscribers
    this._cartservice.cartSubject.next(this._cartservice.cart);
    this._cartservice.cartMsg.next(this._cartservice.cartmsg);
  
    // this._cartservice.addToCart(item);
    
  }else if(this.existing_Product){
    this.QuantityErrMsg="Product Is Existing"

    this.existing_Product.quantity=this.existing_Product.quantity+1;
    this.product_quantity.quantity=this.existing_Product.quantity
    this._cartservice.EditCart(this.existing_Product).subscribe((cart)=>{
      console.log("Edit Card Product",cart)
      }
      )}
  
  else{
    this.QuantityErrMsg="Please Enter Valid Quantity"
  }
  }
}
