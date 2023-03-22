import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

//   constructor(private http:HttpClient) { }
// baseurl=environment.baseurl;
// resname=environment.resname;
//   addcart=[]
//   AddCart(data:any){
//     try {
//       return this.http.post(this.baseurl+this.resname,data)
//     } catch (error:any) {
//       return throwError(()=>new Error(error))
//     }
//   }
//   ShowCart(){
//     try {
//     return this.http.get(this.baseurl+this.resname)
//   } catch (error:any) {
//     return throwError(()=>new Error(error))
//   }
//   }

//   DelectProduct(id:any){
//     try {
//       return this.http.delete(this.baseurl+this.resname+'/'+id)
//     } catch (error:any) {
//       return throwError(()=>new Error(error))
//     }
//   }


private cartItems = new BehaviorSubject<any>([]);

  constructor() { }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  addToCart(item) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = [...currentItems, item];
    this.cartItems.next(updatedItems);
    console.log(updatedItems)
  }

}
