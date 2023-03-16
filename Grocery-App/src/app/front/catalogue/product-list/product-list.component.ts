import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/services/product-list.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  defaultCategory='all';
  selectedCategory:string;
  constructor(private route: ActivatedRoute,private productservice:ProductsService) {
    this.selectedCategory = this.defaultCategory;
  }
category:any
  // products: any[] = [
  //   {
  //     name: 'Apple',
  //     image: 'https://picsum.photos/id/239/200/300',
  //     quantity: 10,
  //     price: 20,
  //     category: 'fruits'
  //   },
  //   {
  //     name: 'Banana',
  //     image: 'https://picsum.photos/id/237/200/300',
  //     quantity: 5,
  //     price: 10,
  //     category: 'fruits'
  //   },
  //   {
  //     name: 'Oranges',
  //     image: 'https://picsum.photos/id/236/200/300',
  //     quantity: 12,
  //     price: 15,
  //     category: 'fruits'
  //   },
  //   {
  //     name: 'Carrot',
  //     image: 'https://picsum.photos/id/236/200/300',
  //     quantity: 12,
  //     price: 15,
  //     category: 'vegetables'
  //   },
  //   {
  //     name: 'Broccoli',
  //     image: 'https://picsum.photos/id/242/200/300',
  //     quantity: 7,
  //     price: 25,
  //     category: 'vegetables'
  //   },
  //   {
  //     name: 'Bread',
  //     image: 'https://picsum.photos/id/238/200/300',
  //     quantity: 19,
  //     price: 30,
  //     category: 'bakery'
  //   },
  //   {
  //     name: 'Cake',
  //     image: 'https://picsum.photos/id/240/200/300',
  //     quantity: 5,
  //     price: 50,
  //     category: 'bakery'
  //   }
  // ];

  Product_Arr:any
  ngOnInit() {
    this.Product_Arr=this.productservice.getProducts()
    this.Filter_Category(this.selectedCategory);

    // this.route.paramMap.subscribe(params => {
    //   const category = params.get('category');
    //   console.log(category)
    //   if (category=='all') {

    //     this.productArray
    //     console.log(this.productArray)
    //     this.category='Fruits And Vegetables'
    //   }else{
    //     this.productArray = this.productArray.filter(productArray => productArray.category === category);
    //     this.category=category
    //   }


    //   console.log(this.categories)
    // });

  }


  // checkCategory() {
  //   this.route.paramMap.subscribe(params => {
  //     const category = params.get('category');
  //     console.log(category)
  //     if (category == 'all') {
  //       // Filter products array based on category
  //       this.productArray
  //       console.log(this.productArray)
  //       this.category='Fruits And Vegetables'
  //     } else {
  //       this.productArray = this.productArray.filter(productArray => productArray.category === category);
  //       this.category=category
  //     }
  
  //     console.log(this.categories)
  //   });
  // }
  

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
      imageurl:"Vegetables.jpg",
      category: "fruits",
      name: "Organic Brown Rice5",
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
  categories = Array.from(new Set(this.productArray.map(product => product.category)));
  category_all:any = this.categories.unshift('all')
  filteredItems:any[]=[]
  Filter_Category(category:any){
    this.selectedCategory = 'all';
  //   let tempArr: any[]=[]
  //   // console.log("Temp",category_value)
  //   console.log(this.productArray.length)
  //   for(let i=0;i<this.productArray.length;i++){
  //     if(this.productArray[i].category===this.categories[i]){
  //       let temp = tempArr.push(this.productArray[i])
  //     }
  //   }
  //   // console.log("Data",tempArr)
  //   return tempArr
if(category==='all'){
  this.filteredItems=this.productArray
}else{
  this.filteredItems = this.productArray.filter(item => item.category === category);
  console.log(this.filteredItems)
}
}
}