import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  panelOpenState = false;
constructor(private _userService:UserService){}
  PastOrderArr=[
    // {
    //   day:"12 March,Sun",
    //   time:"8:30 AM - 12:30 PM",
    //   order_amount:162,
    //   item:2,
    //   product_details:"I'm visible because I am open"
    // },
    // {
    //   day:"12 March,Sun",
    //   time:"8:30 AM - 12:30 PM",
    //   order_amount:162,
    //   item:2,
    //   product_details:"I'm visible because I am open"
    // },
    // {
    //   day:"12 March,Sun",
    //   time:"8:30 AM - 12:30 PM",
    //   order_amount:162,
    //   item:2,
    //   product_details:"I'm visible because I am open"
    // },
    // {
    //   day:"12 March,Sun",
    //   time:"8:30 AM - 12:30 PM",
    //   order_amount:162,
    //   item:2,
    //   product_details:"I'm visible because I am open"
    // },
    // {
    //   day:"12 March,Sun",
    //   time:"8:30 AM - 12:30 PM",
    //   order_amount:162,
    //   item:2,
    //   product_details:""
    // },
    // {
    //   day:"12 March,Sun",
    //   time:"8:30 AM - 12:30 PM",
    //   order_amount:162,
    //   item:2,
    //   product_details:"I'm visible because I am open"
    // },
  ]
  ngOnInit(){
    this._userService.Get_Customer_All_Orders().subscribe({next:(User_all_Order_res)=>{
      console.log("User_all_Order_res",User_all_Order_res.data.orders)
      this.PastOrderArr=User_all_Order_res.data.orders
    },error:(User_all_Order_error)=>{
      console.log("User_all_Order_error",User_all_Order_error)
    }})
  }
  _userServi
}
