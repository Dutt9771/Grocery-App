import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private route:Router,private _cartService: CartService){}
  address_user=[{
    id:1,
    address:"Odell J. Gabbert 1045 Kildeer DriveNorfolk, VA 23502"
  },
{
  id:2,
  address:"Thelma E. Rogers 3651 Burton AvenueMemphis, TN 38104"
},{
  id:3,
address:"Kathleen G. Hogan 3516 Layman AvenueFayetteville, NC 28306"
}]
address: any;

Cancel_Checkout(){
this.route.navigate(['/front/home'])
}
Place_Order(){
  this.route.navigate(['/front/success'])
}

cartTotal: number;
  ngOnInit(): void {
    this._cartService.cartTotal$.subscribe(total => {
      this.cartTotal = total;
    });
}
}
