import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit,Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/interface/item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryComponent } from '../../catalogue/category/category.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private _ProductsService:ProductsService,
    private renderer:Renderer2
  ) {  
  }

  topsells:any
  toprated:Item[]
  trendingItems:Item[]
  recentlyAdded:any
  ngOnInit() {
    this.topsells=this._ProductsService.Top_Sells()
    this.toprated=this._ProductsService.Top_Rated()
    this.recentlyAdded=this._ProductsService.Recently_Added()
    this.trendingItems=this._ProductsService.Trending_Items()
    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
//   @ViewChild('cardBody') cardBody: ElementRef;
//   selectedRating: string;
//   changeColor(event) {
//     const clickedEl = event.target;
 
//     // Remove previous classes
//     this.renderer.removeClass(this.cardBody.nativeElement.children[0], 'text-primary');
//     this.renderer.removeClass(this.cardBody.nativeElement.children[1], 'text-primary');
//     this.renderer.removeClass(this.cardBody.nativeElement.children[2], 'text-primary');
//     this.renderer.removeClass(this.cardBody.nativeElement.children[3], 'text-primary');
//     this.renderer.removeClass(this.cardBody.nativeElement.children[4], 'text-primary');
 
//     // Add class to clicked element
//     this.renderer.addClass(clickedEl, 'text-primary');
 
//     // Set selected rating value
//     this.selectedRating = clickedEl.attributes.title.value;
//  }
selectedProductRating: any = {}; // object to hold selected rating for each product

changeProductRating(event: any, productId: number) {
  const selectedRating = event.target.title;
  this.selectedProductRating[productId] = selectedRating;
  // call a service or API to update the rating for the selected product with productId
}

  rating: number = 0;

  rate(rating: number) {
    this.rating = rating;
    console.log("rating",this.rating)
  }

  // stars = [1, 2, 3, 4, 5];
  // rate(star: number, userId: number) {
  //   const userIndex = this.topsells.findIndex(user => user.productId === userId);
  //   if (userIndex !== -1) {
  //     this.topsells[userIndex].rating = star;
  //     console.log(this.topsells[userIndex].rating)
  //     console.log(`User ${userId} rated ${star} stars.`);
  //   } else {
  //     console.log(`User ${userId} not found!`);
  //   }
  // }

 
  // users: any= [
  //   {id: 1, name: 'User1', ratings: {}},
  //   {id: 2, name: 'User2', ratings: {}},
  //   {id: 3, name: 'User3', ratings: {}},
  // ];
  
  // stars = [1, 2, 3, 4, 5];
  // rating: number = 0;

  // rateProduct(productId: number, rating: number) {
  //   const product = this.topsells.find((p) => p.productId === productId);
  //   if (product) {
  //     product.rating = rating;
  //   }
  // }
  getStar(rating: number): string {
    let html = '';
    for (let i = 0; i < rating; i++) {
       html += '&#9733;'; // add full star
    }
    for (let i = rating; i < 5; i++) {
       html += '&#9734;'; // add empty star
    }
    return html;
    
  }
  setRating(index: number, value: number): void {
    this.topsells[index].rating = value;
 }
 
  
}


