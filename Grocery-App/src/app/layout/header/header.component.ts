import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { RegisterService } from '../../shared/services/register/register.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  category='all'
    filterValue:any
    Registered_User:boolean=false
    Login_Logout_msg:string="Login"
    cartItemCount :any
    subTotal = 0;
    User_name="Guest"
    constructor(private _snackBar: MatSnackBar,private router:Router,private _RegisterService:RegisterService,private _cartService:CartService,private _productsservice:ProductsService) {
      
      this._RegisterService.Login_Logout_msg.subscribe(res=>{
        this.Login_Logout_msg == res;
      })
      this._cartService.cartItems$.subscribe(cartItems => {
        this.cartItemCount = cartItems.length;
      });
    }
    RegisterData:any
    User:any
    LoginData:any
    cartMessage:any
    CountArr:any=[]
    cartItemslength:any
    subtotal:number=0
    Cartlength:any
    filteredItems:any=[]
    myControl = new FormControl('');
    // ngDoCheck(){
    //   this._cartService.ShowCart().subscribe((res)=>{
    //     // console.log("res",res) 
    //     this.cartItemCount=res
    //     this.Cartlength=this.cartItemCount.length
    //   })
    // }
    ngOnInit(): void{
      
      this.filteredItems=this._productsservice.getProducts()
      this.router.events.subscribe((res:any)=>{
        if(res.url){
          this._cartService.ShowCart().subscribe((res)=>{
            console.log("res",res) 
            this.cartItemCount=res
            this.Cartlength=this.cartItemCount.length
          })
          this.Check_User()
        }
      })


        this._cartService.CartItemsLength.subscribe((res)=>{
          this.cartItemslength=res.length
          console.log(this.cartItemslength)
        })
      // this._cartService.cartItems$.subscribe(cart => {
      //   this.cartItemsCount = cart.length;
      // });

console.log("Register_user",this.Register_User)
console.log("Login_user",this.Login_User)
this._cartService.currentSubtotal.subscribe(subtotal => this.subtotal = subtotal);
// this.subTotal = this.Subtotal.Subtotal();
      console.log("Subtotal",this.subtotal)
      // this.subTotal = this._cartService.subtotal;
 
      // this.CountArr=(localStorage.getItem('Products_Count'))
      // console.log("CountArr",JSON.parse(this.CountArr).length)
      // this.cartItemCount=JSON.parse(this.CountArr).length
      this._cartService.cartSubject.subscribe(cart => {
        console.log("cart",cart)
        this.cartItemCount = cart.length;
      });
      this._cartService.cartMsg.subscribe(cart => {
        this.cartMessage = cart
        console.log(this.cartMessage)
        this._snackBar.open(this.cartMessage+" Added in Cart", "Ok");
      });
  
      // end cartcounter
      this.LoginData= JSON.parse(sessionStorage.getItem('Login_User'));
      this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
      this.User= JSON.parse(sessionStorage.getItem('User'));
      if(this.LoginData || this.User){
        this.Login_Logout_msg="Logout"
      }
     
    }
    Check_User(){
      
    // console.log("Register_user",this.Register_User)
    // console.log("Login_user",this.Login_User)
    // this.Login_User= sessionStorage.getItem('Login_User')
    this.Login_User= JSON.parse(sessionStorage.getItem('Login_User'))
    // this.LoginData= JSON.parse(sessionStorage.getItem('Login_User'));
    // this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
    this.Register_User= sessionStorage.getItem('Register_User');
    this.Register_User= JSON.parse(sessionStorage.getItem('Register_User'));
    if(this.Register_User){
      this.Registered_User=false
    }else{
      this.Registered_User=true
    }
    // this.User= JSON.parse(sessionStorage.getItem('User'));
    if(this.Login_User){
      this.Registered_User=false
      this.Login_Logout_msg="Logout"
      this.User_name=this.Login_User.username
    }else{
      this.User_name="Guest"
    }
    }
    cart:any=[]
    Login_User:any;
    Register_User:any
    // ngDoCheck(){
      
    // //   this._cartservice.ShowCart().subscribe((res)=>{
    // //     this.cart=res
    // //     this.cartItemCount=this.cart.length
    // //     console.log("cart length",this.cart.length)
    // // })



    // }
    title = 'Grocery-App';
    login_logout:boolean |undefined;
    // logout(loggedInuser: boolean) {
      //   this.LoginService.log_out(loggedInuser)    
      //   }
     
      userData:any = sessionStorage.getItem('User');
      email:any = this.userData
    logout(){
      sessionStorage.removeItem('User');
      sessionStorage.removeItem('Login_User');
      sessionStorage.removeItem('Register_User')
      this.router.navigate(['front/user/login'])
      // console.log(this.email)
      this.Login_Logout_msg="Login"
      this.User_name="Guest"
    }
  
  
    
    Add_cart_count(){
    
      this.router.navigate(['/front/cart'])
    }
    

    
  }
  