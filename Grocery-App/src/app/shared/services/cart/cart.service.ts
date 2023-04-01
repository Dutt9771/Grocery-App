import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
CartItemsLength:EventEmitter<any>=new EventEmitter();
  constructor(private http:HttpClient) { 
   
  }
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

  myArray: any[] = [];
  myArraySubject = new BehaviorSubject<any>([]);
  ShowcartArr(): Observable<any> {
    return this.ShowCart().pipe(
      map(res => {
        console.log("res", res);
        this.myArraySubject.next(res);
        return this.myArraySubject;
      })
    );
  }

  getItemCount() {
    console.log("ShowcarArr",this.ShowcartArr())
    return this.ShowcartArr()

  }
  addItemToCart() {
    console.log("ShowcarArr",this.ShowcartArr())
    return this.ShowcartArr()
  }

  removeItemFromCart() {
    console.log("ShowcarArr",this.ShowcartArr())
    return this.ShowcartArr()

  }


  private subtotalSource = new BehaviorSubject<number>(0);
  currentSubtotal = this.subtotalSource.asObservable();

  updateSubtotal(subtotal: number) {
    this.subtotalSource.next(subtotal);
  }





  private cartItemsSubject = new BehaviorSubject([]);
  public cartItems$ = this.cartItemsSubject.asObservable();


  public addToCart(item: any) {
    const cartItems = this.cartItemsSubject.value;
    this.AddCart(item).subscribe((res)=>{
      // this.CartItemsLength.emit(res)
    })
    cartItems.push(item);
    this.cartItemsSubject.next(cartItems);
  }

  public removeFromCart(item: any) {
    let cartItems = this.cartItemsSubject.value;
    cartItems = cartItems.filter(i => i.id !== item.id);
    this.cartItemsSubject.next(cartItems);
    // this.AddCart(item).subscribe((res)=>{
    //   this.CartItemsLength.emit(res)
    // })
  }
}
