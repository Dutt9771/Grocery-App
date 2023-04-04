import { Component } from '@angular/core';
import { EdituserService } from 'src/app/shared/services/edituser/edituser.service';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.css']
})
export class ManageaddressComponent {
  showAdd:any=[]
  User_details_Obj_addresses=[]
constructor(private _edituserService:EdituserService){}
User_details_Obj:any
ngOnInit(){
  this.Show_Address()
  this.Get_User_Details()

  // .subscribe({next:(get_User_Address_res)=>{
  //   this.showAdd=get_User_Address_res
  //   console.log("get_User_Address_res",get_User_Address_res)
  // }})
}
Get_User_Details(){
    this._edituserService.Get_User_Details().subscribe({next:(User_details_res)=>{
      console.log("User_Details",User_details_res.data)
      this.User_details_Obj=User_details_res.data
      this.User_details_Obj_addresses=this.User_details_Obj.addresses
    },error:(User_details_error)=>{
      console.log("Getuserdetail_error",User_details_error)
    }})
  }
LoginData:any
filteredUsers:any
Show_Address(){
  
  this.LoginData=JSON.parse(sessionStorage.getItem("Login_User"))
  this.showAdd=this._edituserService.get_User_addresses()
  this.showAdd=JSON.parse(localStorage.getItem("User_address"))
  console.log("showAdd",this.showAdd)
  // Assume the given array is stored in a variable called 'users'


const targetUsername = this.LoginData.username

  this.filteredUsers = this.showAdd.filter(user => user.username === targetUsername);
// for(let i=0;i<=filteredUsers.length;i++){

//   filteredUsers[i].Address

// }
console.log("filteredUsers Address",this.filteredUsers);
}

}
