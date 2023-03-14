import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    getProducts() {
      return [
        {name: 'Product 1', category: 'Fruits', imageUrl: '/assets/img1.jpg', quantity: 10},
        {name: 'Product 2', category: 'Fruits', imageUrl: '/assets/img2.jpg', quantity: 20},
        {name: 'Product 3', category: 'Vegetables', imageUrl: '/assets/img3.jpg', quantity: 30},
        {name: 'Product 4', category: 'Vegetables', imageUrl: '/assets/img4.jpg', quantity: 40},
        {name: 'Product 5', category: 'Grains', imageUrl: '/assets/img5.jpg', quantity: 50},
        {name: 'Product 6', category: 'Grains', imageUrl: '/assets/img6.jpg', quantity: 60},
        {name: 'Product 7', category: 'Dairy', imageUrl: '/assets/img7.jpg', quantity: 70},
        {name: 'Product 8', category: 'Dairy', imageUrl: '/assets/img8.jpg', quantity: 80},
      ];
    }
  }

