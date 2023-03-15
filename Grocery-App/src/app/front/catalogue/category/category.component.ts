import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
constructor(private router:Router){}
  food: any;
  grocery_items=[
    {
      category: 'Fruits',
      image: '/assets/Peach.jpg',
      quantity: '1 kg'
    },
    {
      category: 'Fruits',
      image: '/assets/Peach.jpg',
      quantity: '1 kg'
    },
    {
      category: 'Fruits',
      image: '/assets/Peach.jpg',
      quantity: '1 kg'
    },
    {
      category: 'Fruits',
      image: '/assets/Peach.jpg',
      quantity: '1 kg'
    },
    {
      category: 'Vegetables',
      image: '/assets/vegetables/broccoli.jpg',
      quantity: '500 g'
    },
    {
      category: 'Canned Goods',
      image: '/assets/canned-goods/soup.jpg',
      quantity: '400 g'
    },
    {
      category: 'Dairy',
      image: '/assets/dairy/milk.jpg',
      quantity: '1 L'
    },
    {
      category: 'Bakery',
      image: '/assets/bakery/bread.jpg',
      quantity: '500 g'
    },
    {
      category: 'Snacks',
      image: '/assets/snacks/chips.jpg',
      quantity: '100 g'
    },
    {
      category: 'Beverages',
      image: '/assets/beverages/juice.jpg',
      quantity: '1 L'
    }
   
    
  ]
  

  Peach(){
    this.router.navigate(['/front/catalogue/product-list'])
  }
  categories: any[] = [
    {
      name: 'Fruits',
      image: 'https://picsum.photos/id/237/200/300',
      quantity: 32
    },
    {
      name: 'Vegetables',
      image: 'https://picsum.photos/id/236/200/300',
      quantity: 15
    },
    {
      name: 'Bakery',
      image: 'https://picsum.photos/id/230/200/300',
      quantity: 23
    }
  ];
}
