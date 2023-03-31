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
  this.showAdd=this.__edituserService.get_User_addresses()
  this.showAdd=JSON.parse(localStorage.getItem("User_address"))
  console.log("showAdd",this.showAdd)
  // .subscribe({next:(get_User_Address_res)=>{
  //   this.showAdd=get_User_Address_res
  //   console.log("get_User_Address_res",get_User_Address_res)
  // }})
}

}
