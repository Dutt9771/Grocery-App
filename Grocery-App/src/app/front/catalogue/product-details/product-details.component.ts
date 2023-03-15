import { Component } from '@angular/core';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productArray = [
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 8,
      price:12,
      money: "USD",
    },
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 9,
      price:12,
      money: "USD",
    },
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 10,
      price:12,
      money: "USD",
    },
    {
      imageurl:"Peach.jpg",
      category: "Grocery",
      name: "Organic Brown Rice",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 10,
      money: "USD",
      price:20,
    },
    {
      imageurl:"Vegetables.jpg",
      category: "Grocery",
      name: "Organic Brown Rice",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 2,
      price:5,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "Grocery",
      name: "Vegetables",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "Grocery",
      name: "Vegetables",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    }
    
  ];

 
  
}
