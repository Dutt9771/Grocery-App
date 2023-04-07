import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, mergeMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
CartItemsLength:EventEmitter<any>=new EventEmitter();
  constructor(private http:HttpClient) { 
   
  }
baseurl=environment.baseurl;
baseUrl=environment.baseUrl;
resname=environment.resname;
add_order=environment.orders_routes.add_order;
get_order_by_id=environment.orders_routes.get_order_by_id
  addcart=[]

  private cartItemsSubject = new BehaviorSubject([]);
  private cartCount = new BehaviorSubject(0);

  AddCart(data:any){
    try {
      return this.http.post(this.baseurl+this.resname,data)
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }
  EditCart(customer_id,data:any){
    try {
      return this.http.put(this.baseurl+this.resname+'/'+customer_id,data)
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }
  url:any
  items:any

  AddCartUserWise(customerId: number,data:any){
    try {
      return this.http.get(this.baseurl+this.resname+"/"+customerId).pipe(
        mergeMap((customer: any) => {
          const currentItemArray = customer.items;
          currentItemArray.push(data);
    
          return this.http.patch(this.baseurl+this.resname+"/"+customerId, {
            items: currentItemArray
          });
        })
      );

      // this.url= `${this.baseurl}${customerId}/items`;
      // return this.http.patch(`this.baseurl${customerId}`,{
      //   items: [...data]
      // })
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }
  ShowCart(){
    try {
    return this.http.get(this.baseurl+this.resname)
  } catch (error:any) {
    return throwError(()=>new Error(error))
  }
  }

  DelectProduct(id:any){
    try {
      return this.http.delete(this.baseurl+this.resname+'/'+id)
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }



public cartTotal$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
public cartmsg$: BehaviorSubject<string> = new BehaviorSubject<string>('');


  setCartTotal(total: number) {
    try {
      return this.cartTotal$.next(total);
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
  setCartmsg(msg: string) {
    try {
      return this.cartmsg$.next(msg);
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
    
  }

  public cart = [];

  cartArr(){
    return this.cart
  }
  public cartmsg=''
  public cartSubject = new Subject<any>();
  public cartMsg = new Subject<any>();
  cartItemCount$ = new BehaviorSubject<any>(0);

  public subtotalSource = new BehaviorSubject<number>(0);
  currentSubtotal = this.subtotalSource.asObservable();

  updateSubtotal(subtotal: number) {
    this.subtotalSource.next(subtotal);
  }
Subtotal(){
  
  this.ShowCart().subscribe((res)=>{
    this.cartc=res

    const cartLength = this.cartc.length;
    // this.subtotalSource.next
    let cartsubtotal:number=0
    for(let i=0;i<this.cartc.length;i++){
      cartsubtotal+=this.cartc[i].quantity*this.cartc[i].amount
      // console.log("this.cartsubtotal",this.cartc[i].quantity*this.cartc[i].amount)
      // console.log("this.cartsubtotal",this.cartc[i].amount)
      // console.log("this.cartsubtotal",this.cartc[i].quantity)
      // console.log("this.cartcartsubtotalsubtotal",this.cartc[i])
      // console.log("this.cartsubtotal",this.cartc)
      // console.log("this.cartsubtotal",cartsubtotal)
    }
    this.subtotalSource.next(cartsubtotal);

  })
}

cartc:any
Cartdata:any
cartcount=new BehaviorSubject<any>(0);
public cartLengthSubject = new BehaviorSubject<number>(0);
public cartLength$ = this.cartLengthSubject.asObservable();

// When the cart updates, emit a new value for the cart length subject
updateCart(cart: any[]): void {
  // Update the logic for updating the cart array here
  const cartLength = cart.length;
  this.cartLengthSubject.next(cartLength);
}
getItemCount(){

  this.ShowCart().subscribe((res)=>{
    this.cartc=res
    // console.log("cartc",this.cartc.length)
    // this.cartcount.next(this.cartc.length);
    // console.log("cartcount",this.cartcount)
    const cartLength = this.cartc.length;
  this.cartLengthSubject.next(cartLength);
  })
}
  
Add_Order(data:any,delivery_address_id:any,billing_address_id:any,payment_status:any,order_status:any){
  try {
    return this.http.post<any>(this.baseUrl+this.add_order,data,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*',"billing_address_id":billing_address_id,"delivery_address_id":delivery_address_id,"payment_status":payment_status,"order_status":order_status})})
  } catch (error:any) {
    return throwError(() => new Error(error))
  }
}
Get_Order_Detail_By_Id(order_id:any){
  try {
    return this.http.get<any>(this.baseUrl+this.get_order_by_id,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*',"order_id":order_id})})
  } catch (error:any) {
    return throwError(() => new Error(error))
  }
}

}
