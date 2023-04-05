import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { EdituserService } from 'src/app/shared/services/edituser/edituser.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private route:Router,private _cartService: CartService,private _edituserService:EdituserService){}
  address_user=[]
  
//   address_user=[{
//     id:1,
//     address:"Odell J. Gabbert 1045 Kildeer DriveNorfolk, VA 23502"
//   },
// {
//   id:2,
//   address:"Thelma E. Rogers 3651 Burton AvenueMemphis, TN 38104"
// },{
//   id:3,
// address:"Kathleen G. Hogan 3516 Layman AvenueFayetteville, NC 28306"
// }]
address: any;
Login_User:any
Cancel_Checkout(){
this.route.navigate(['/home'])
}
User_details_Obj:any
User_details_Obj_addresses:any=[]
Get_User_Details(){
  this._edituserService.Get_User_Details().subscribe({next:(User_details_res)=>{
    console.log("User_Details",User_details_res.data)
    this.User_details_Obj=User_details_res.data
    this.User_details_Obj_addresses=this.User_details_Obj.addresses
  },error:(User_details_error)=>{
    console.log("Getuserdetail_error",User_details_error)
  }})
}
payment_status:any="W4YV_pkH7OAkvZO4P1gbzA==";
order_status:any="Nn9l9xhHYQsvNB503C4EAQ==";
delivery_address_id:any="AlqnPx8sIaCpUTRiDOiSgQ=="
billing_address_id:any="AlqnPx8sIaCpUTRiDOiSgQ=="
Add_Order_Response_Data:any
Place_Order(){
  this.Login_User= JSON.parse(sessionStorage.getItem('Login_User'))
if(this.Login_User){
  this.route.navigate(['/front/cart/success'])
    this._cartService.Add_Order(this.data,this.delivery_address_id,this.billing_address_id,this.payment_status,this.order_status).subscribe({next:(Add_Order_res)=>{
      console.log("Add_address_res",Add_Order_res)
      this.Add_Order_Response_Data=Add_Order_res.data.id
      console.log("Add_Order_Response_Data",this.Add_Order_Response_Data)
      this._cartService.Get_Order_Detail_By_Id(this.Add_Order_Response_Data).subscribe({next:(Get_OrderById_res)=>{
console.log("Get_OrderById_res",Get_OrderById_res)
      },error:(Get_Order_error)=>{
        console.log("Get_Order_error",Get_Order_error)
      }})
    },error:(Add_Order_error)=>{
      console.log("Add_Order_error",Add_Order_error)
    }})
}
}

cartTotal: number;
data:any
  ngOnInit(): void {
    this.Get_User_Details()
    this.data=this._cartService.Cartdata
  this.address_user=JSON.parse(localStorage.getItem("User_address"))
  console.log("address_user",this.address_user)
    this._cartService.cartTotal$.subscribe(total => {
      this.cartTotal = total;
    });
    console.log("data",this.data)
}
}
