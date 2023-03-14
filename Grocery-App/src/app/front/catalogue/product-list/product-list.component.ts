import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 

  constructor(private route: ActivatedRoute) {}
category:any
  products: any[] = [
    {
      name: 'Apple',
      image: 'https://picsum.photos/id/239/200/300',
      quantity: 10,
      price: 20,
      category: 'fruits'
    },
    {
      name: 'Banana',
      image: 'https://picsum.photos/id/237/200/300',
      quantity: 5,
      price: 10,
      category: 'fruits'
    },
    {
      name: 'Oranges',
      image: 'https://picsum.photos/id/236/200/300',
      quantity: 12,
      price: 15,
      category: 'fruits'
    },
    {
      name: 'Carrot',
      image: 'https://picsum.photos/id/236/200/300',
      quantity: 12,
      price: 15,
      category: 'vegetables'
    },
    {
      name: 'Broccoli',
      image: 'https://picsum.photos/id/242/200/300',
      quantity: 7,
      price: 25,
      category: 'vegetables'
    },
    {
      name: 'Bread',
      image: 'https://picsum.photos/id/238/200/300',
      quantity: 19,
      price: 30,
      category: 'bakery'
    },
    {
      name: 'Cake',
      image: 'https://picsum.photos/id/240/200/300',
      quantity: 5,
      price: 50,
      category: 'bakery'
    }
  ];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // Read category parameter from URL
      const category = params.get('category');
      console.log(category)
      if (category=='all') {
        // Filter products array based on category
        this.productArray
        console.log(this.productArray)
        this.category='Fruits And Vegetables'
      }else{
        this.productArray = this.productArray.filter(productArray => productArray.category === category);
        this.category=category
      }
    });
  }
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
      category: "fruits",
      name: "Organic Brown Rice",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 2,
      price:5,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "fruits",
      name: "Vegetables",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "fruits",
      name: "Vegetables",
      weight: "500 grams",
      sellerName: "Organic Farms Inc.",
      moneyOfferPrice: 3,
      price:10,
      money: "USD",
    },
    {
      imageurl:"Vegetables.jpg",
      category: "fruits",
      name: "Vegetables",
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
      
      category: "vegetables",
      name: "Tomato",
      weight: "500 grams",
      sellerName: "Vishnu Farms Inc.",
      moneyOfferPrice: 5,
      price:12,
      money: "USD",
    },
  ]

  bysellername(){
    this.productArray = this.sortBySellerName(this.productArray);
    console.log(this.productArray)
  }
  byname(){
    this.productArray = this.sortByName(this.productArray);
    console.log(this.productArray)
  }

  sortBySellerName(products:any) {
    return products.sort((a:any, b:any) => {
      if (a.sellerName < b.sellerName) {
        return -1;
      } else if (a.sellerName > b.sellerName) {
        return 1;
      }
      return 0;
    });
  }
  sortByName(products:any) {
    return products.sort((a:any, b:any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  
}