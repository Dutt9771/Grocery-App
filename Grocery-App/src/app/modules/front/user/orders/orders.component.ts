import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  panelOpenState = false;
constructor(private _cartservice:CartService){}
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
  ngOnInit(){
    // this._cartservice.Get_Order_Detail_By_Id()
  }
}
