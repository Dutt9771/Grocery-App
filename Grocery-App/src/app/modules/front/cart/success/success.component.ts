import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  Customer_Id:number
  User_Details:any
  constructor(private route:Router,private _cartservice:CartService){
    this.User_Details=JSON.parse(sessionStorage.getItem('User_Details'))
    this.Customer_Id=this.User_Details.id
    console.log("Customer_Id",this.Customer_Id)
  }
     ngOnInit(){ window.scrollTo(0,0)
      
      // this.Showcart()
    setTimeout(()=>{
      this.route.navigate(['/home'])
    },6000);
  }
  ShowcartArr:any=[]
  Showcart(){
    const sampleData = {
      id: this.Customer_Id,
      items: [
      ]
    }
    this._cartservice.ShowCart().subscribe((res)=>{
      if(res){

        this.ShowcartArr=res
        console.log("ShowcartArr",this.ShowcartArr)
      }
      
    })
    this.route.events.subscribe((res:any)=>{
      if(res.url){
        
        let FindCustomer=this.ShowcartArr.find((item)=>item.id=== this.Customer_Id)
        console.log("FindCustomer",FindCustomer)
          if(!FindCustomer){
    console.log("NOt User")
            this._cartservice.AddCart(sampleData).subscribe(res=>{
              if(res){

                console.log(
                  "sampleData Of Cart",sampleData
                  )
                  this._cartservice.getItemCount()
                  this._cartservice.Subtotal()
                }
              })
            }
        }
      })
      // return this.ShowcartArr
  }
}
