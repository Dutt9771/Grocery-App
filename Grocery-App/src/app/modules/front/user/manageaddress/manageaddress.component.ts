import { Component } from '@angular/core';
import { EdituserService } from 'src/app/shared/services/edituser/edituser.service';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.css']
})
export class ManageaddressComponent {
  showAdd:any=[]

constructor(private __edituserService:EdituserService){}
ngOnInit(){
  this.Show_Address()
  // .subscribe({next:(get_User_Address_res)=>{
  //   this.showAdd=get_User_Address_res
  //   console.log("get_User_Address_res",get_User_Address_res)
  // }})
}
LoginData:any
filteredUsers:any
Show_Address(){
  
  this.LoginData=JSON.parse(sessionStorage.getItem("Login_User"))
  this.showAdd=this.__edituserService.get_User_addresses()
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
