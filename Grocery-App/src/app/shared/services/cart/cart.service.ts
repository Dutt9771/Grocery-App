import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
baseurl=environment.baseurl;
resname=environment.resname
  addcart=[]

  AddCart(data:any){
    try {
      return this.http.post(this.baseurl+this.resname,data)
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }
  EditCart(data:any){
    try {
      return this.http.put(this.baseurl+this.resname+'/'+data.id,data)
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


// private cartItems = new BehaviorSubject<any>([]);

//   constructor() { }

//   getCartItems() {
//     return this.cartItems.asObservable();
//   }

//   addToCart(item) {
//     const currentItems = this.cartItems.getValue();
//     const updatedItems = [...currentItems, item];
//     this.cartItems.next(updatedItems);
//     console.log(updatedItems)
//   }

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



  private itemCount = 0;

  getItemCount() {
    return this.itemCount;
  }

  addItemToCart() {
    return this.itemCount+=1;
  }

  removeItemFromCart() {
    return this.itemCount-=1;
  }


  private subtotalSource = new BehaviorSubject<number>(0);
  currentSubtotal = this.subtotalSource.asObservable();

  updateSubtotal(subtotal: number) {
    this.subtotalSource.next(subtotal);
  }
}
