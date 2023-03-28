import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  panelOpenState = false;

  PastOrderArr=[
    {
      day:"12 March,Sun",
      time:"8:30 AM - 12:30 PM",
      order_amount:162,
      item:2,
      product_details:"I'm visible because I am open"
    },
    {
      day:"12 March,Sun",
      time:"8:30 AM - 12:30 PM",
      order_amount:162,
      item:2,
      product_details:"I'm visible because I am open"
    },
    {
      day:"12 March,Sun",
      time:"8:30 AM - 12:30 PM",
      order_amount:162,
      item:2,
      product_details:"I'm visible because I am open"
    },
    {
      day:"12 March,Sun",
      time:"8:30 AM - 12:30 PM",
      order_amount:162,
      item:2,
      product_details:"I'm visible because I am open"
    },
    {
      day:"12 March,Sun",
      time:"8:30 AM - 12:30 PM",
      order_amount:162,
      item:2,
      product_details:""
    },
    {
      day:"12 March,Sun",
      time:"8:30 AM - 12:30 PM",
      order_amount:162,
      item:2,
      product_details:"I'm visible because I am open"
    },
  ]
}
