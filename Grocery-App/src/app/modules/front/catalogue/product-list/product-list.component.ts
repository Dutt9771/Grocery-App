import { AfterContentInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { EncryptionService } from 'src/app/shared/services/encryption/encryption.service';
import { ProductListService } from 'src/app/shared/services/product-list/product-list.service';
import { ProductsService } from 'src/app/shared/services/products/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  defaultCategory='all';
  selectedCategory:string;
  constructor(private _encryptionservice:EncryptionService,
    private route: ActivatedRoute,
    private productservice:ProductsService,
    private _cartservice:CartService,
    private rout:Router,
    private toastr:ToastrService) {
    this.selectedCategory = this.defaultCategory;
  }
category:any

filterValue:any
productArray:any = []


filteredItems:any=[]
  Product_Arr:any=[]
  category_path
  categories:any
  GetProductByCategory(encryption){
    this.productservice.getProductByCategoryId(encryption).subscribe({next:(Product_Res:any) => {
      console.log("Product_Res",Product_Res.data)
      this.filteredItems=Product_Res.data
    },error:(Product_error)=>{
        console.log("Product_error",Product_error)
    }});
  }
  allProducts:any=[]
  GetProducts(){
    this.productservice.getALLProducts().subscribe({next:(get_all_products_res)=>{
      console.log("get_all_products_res",get_all_products_res)
      this.allProducts=get_all_products_res.data
      console.log("allProducts",this.allProducts)
    },error:(get_all_products_error)=>{
      console.log("get_all_products_error",get_all_products_error)
    }})
  }
  encryption_data:string
  encryption(id){
    this._encryptionservice.Encryption(id).subscribe({next:(encryption_res)=>{
      console.log("encryption_res",encryption_res)
      this.encryption_data=encryption_res.data
       console.log("encryption_data",this.encryption_data)
       this.GetProductByCategory(this.encryption_data)
    },error:(encryption_error)=>{
      console.log("encryption_error",encryption_error)
    }})
  }
  categories_Path:any
  ngOnInit() {
    this.GetProducts()
    this.route.paramMap.subscribe(params => {
      this.category_path= params.get('id');
      console.log("Category path",this.category_path)
    })
    if(!(this.category_path=="all")){
      this.encryption(this.category_path)
    }
    
    // this.filteredItems=this.productservice.getProducts()
    // this.productArray=this.productservice.getProducts()
    
    this.categories = this.allProducts.reduce((acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    }, []);
    this.categories.unshift('all')
    // categories = Array.from(new Set(this.productArray.map(product => product.category)));
    
    if(this.category_path){


    if (this.category_path=='all') {

      this.filteredItems=this.allProducts
        console.log("filteredItems",this.filteredItems)
        this.category='Fruits And Vegetables'
      }else{
        this.filteredItems = this.filteredItems.filter(filteredItems => filteredItems[0].category_id === this.category_path);
        this.category=this.category_path
      }
      
      
      console.log("Categories",this.categories)
      console.log("productArray",this.productArray)
    
  }else{
    this.Filter_Category(this.selectedCategory);
  }
    
  }
  
  
 


  Filter_Category(category:any){
    this.selectedCategory = 'all';
  //   let tempArr: any[]=[]
  //   // console.log("Temp",category_value)
  //   console.log(this.productArray.length)
  //   for(let i=0;i<this.productArray.length;i++){
  //     if(this.productArray[i].category===this.categories[i]){
  //       let temp = tempArr.push(this.productArray[i])
  //     }
  //   }
  //   // console.log("Data",tempArr)
  //   return tempArr
if(category==='all'){
  this.allProducts
}else{
  this.filteredItems = this.allProducts.filter(item => item.category === category);
  console.log(this.filteredItems)
}
}

  checkCategory() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      console.log(category)
      if (category == 'all') {
        // Filter products array based on category
        this.productArray
        console.log(this.productArray)
        this.category='Grocery Products'
      } else {
        this.productArray = this.productArray.filter(productArray => productArray.category === category);
        this.category=category
      }
  
      console.log(this.categories)
    });
  }
  
  // bysellername(){
  //   this.productArray = this.sortBySellerName(this.productArray);
  //   console.log(this.productArray)
  // }
  // byname(){
  //   this.productArray = this.sortByName(this.productArray);
  //   console.log(this.productArray)
  // }

  // sortBySellerName(products:any) {
  //   return products.sort((a:any, b:any) => {
  //     if (a.sellerName < b.sellerName) {
  //       return -1;
  //     } else if (a.sellerName > b.sellerName) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }
  // sortByName(products:any) {
  //   return products.sort((a:any, b:any) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     } else if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }




  ProductAddobj:any;
  clickedItem:any=[]
  ShowcartArr:any=[]
  existing_Product:any
  Showcart(){
    this._cartservice.ShowCart().subscribe((res)=>{
      this.ShowcartArr=res
    })
    console.log("ShowcartArr",this.ShowcartArr)
    return this.ShowcartArr
  }
  quantity=1;
  product_quantity={
    quantity:this.quantity,
  }
  Add_cart(i,product){


    console.log("ShowCartArr",this.ShowcartArr)
    console.log("Product",product)
    this.existing_Product = this.ShowcartArr.find((Item:any) => {
      return Item.title === product.title;
    });
    console.log("Existing Product",this.existing_Product)
    if(!this.existing_Product){
      if(this.category_path=='all'){
      console.log("All Products",this.allProducts)
      console.log("id",i)
   
      console.log("Filtered Item Arr",this.allProducts[i])
      this.ProductAddobj= this.allProducts[i]
      this.ProductAddobj=Object.assign(this.ProductAddobj,this.product_quantity)
      this._cartservice.AddCart(this.ProductAddobj).subscribe(res=>{
        console.log(
          res
        )
        // this.toastr.success('Added to cart',product.name);
        this._cartservice.getItemCount()
        this._cartservice.Subtotal()
      })
      }else{
    console.log("id",i)
    console.log("Filtered Item Arr",this.filteredItems[i])
    this.ProductAddobj= this.filteredItems[i].product
    this.ProductAddobj=Object.assign(this.ProductAddobj,this.product_quantity)
    this._cartservice.AddCart(this.ProductAddobj).subscribe(res=>{
      console.log(
        res
      )
      this.toastr.success('Added to cart',product.name);
      this._cartservice.getItemCount()
      this._cartservice.Subtotal()
    })
  }
  }else{
    // this._cartservice.cartmsg="Item Already";
    this.toastr.info('Already Added Please Go to Cart',product.name);
    // this._cartservice.cartMsg.next(this._cartservice.cartmsg);

}
  this.Showcart()
  
}
}