import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
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
  topsells:any=[
    {productId:1,name:'Orange 1kg' , source:'assets/fruits.jpg' , price:'2',rating: 4 },
    {productId:2,name:'Orange 1kg' , source:'assets/fruits.jpg' , price:'4',rating: 3 },
    {productId:3,name:'Orange 1kg' , source:'assets/fruits.jpg' , price:'6',rating: 1 }
   ]
  
   toprated:any=[
    {name:'Orange 1kg' , source:'assets/Vegetables.jpg' , price:'6' },
    {name:'Orange 1kg' , source:'assets/Vegetables.jpg' , price:'5' },
    {name:'Orange 1kg' , source:'assets/Vegetables.jpg' , price:'3' }
   ]
  
   trendingItems:any=[
    {name:'Orange 1kg' , source:'assets/Peach.jpg' , price:'10' },
    {name:'Orange 1kg' , source:'assets/Peach.jpg' , price:'15' },
    {name:'Orange 1kg' , source:'assets/Peach.jpg' , price:'13' }
   ]
  
  recentlyAdded:any=[
    {productId:1,name:'Orange 1kg' , source:'assets/bakery.jpg' , price:'20' },
    {productId:2,name:'Orange 1kg' , source:'assets/bakery.jpg' , price:'1' },
    {productId:3,name:'Orange 1kg' , source:'assets/bakery.jpg' , price:'5' }
  ]

  Top_Sells(){
    return (this.topsells)
  }
  Top_Rated(){
    return this.toprated
  }
  Trending_Items(){
    return this.trendingItems
  }
  Recently_Added(){
    return this.recentlyAdded
  }
    getProducts() {
      
      return this.productArray
  }
  name:any
  constructor(private route:ActivatedRoute) { }
  // ProductShow(){
  // this.route.paramMap.subscribe(params => {
  //   // Read category parameter from URL
  //   const productOnRoute = params.get('product');
  //   console.log(productOnRoute)
  //     this.productArray = this.productArray.filter(productArray => productArray.name.toLowerCase() === productOnRoute);
  //     this.name=productOnRoute
  //     return this.productArray
    
  // });
  
  // }
}
