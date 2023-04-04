import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Edit_user_detail } from 'src/app/shared/Models/edituserdetail';
import { EdituserService } from 'src/app/shared/services/edituser/edituser.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public user: any;
  RegisterData: any;
  errorMessage: string;
  User_login_Token: any;
  constructor(private route: ActivatedRoute,private toastr:ToastrService,private _editUserservice:EdituserService,private _snackBar:MatSnackBar) {}
  ngOnInit(): void {
    //  google profile code
    // this.user = sessionStorage.getItem('User');
    // this.RegisterData= JSON.parse(sessionStorage.getItem('Register_User'));
    // if (this.user || this.RegisterData) {
    //   try {
    //     this.user = JSON.parse(this.user);
    //   } catch (e) {
    //     console.error('Error parsing user data from local storage:', e);
    //     sessionStorage.removeItem('User'); // optionally, remove the invalid user data from local storage
    //   }
    // }
  }

  @Input() Profile: any = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    alternateemail: new FormControl('', [
      //  Validators.required,
      //  Validators.email,
      //  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    alternatecontact: new FormControl('', [
      // Validators.required,
      // Validators.pattern('[- +()0-9]{13}'),
    ]),
    dob: new FormControl('', [Validators.required]),
  });

  get get_Profile() {
    return this.Profile.controls;
  }

  Save_Profile() {
    if (this.Profile.valid) {
      console.log(this.Profile.value);
    }
  }

  User_Profile_Edit(){
    let userData = this.Profile.value
    console.log("user data",userData);


    let Edit_User_Details_body:Edit_user_detail={
      first_name: userData.firstname,
      last_name: userData.lastname,
      password: userData.password,
      date_of_birth: userData.dob,
      secondary_mobile_number: userData.alternatecontact,
      secondary_email: userData.alternateemail
    }
    console.log("Edit User Details body",Edit_User_Details_body)
    if(this.Profile.valid){
      this.User_login_Token=JSON.parse(localStorage.getItem("User_login_Token"))
      this._editUserservice.Edit_user_details(Edit_User_Details_body).subscribe({next:(Edit_User_res)=>{
          console.log("Edit_User_res",Edit_User_res)
          this.errorMessage="User Details Successfully Edited";
          this.toastr.success('Edit Profile Successfully');
      },
      error:(Edit_User_error)=>{ 
        console.log("Edit_User_error status",Edit_User_error.status)
        console.log("Edit_User_error",Edit_User_error)
        if(Edit_User_error.status){
          
          if(Edit_User_error.error.message=="Internal server error"){
            
            this.toastr.error(Edit_User_error.error.error.errors[0].message);
      }else{
        this.toastr.error(Edit_User_error.error.message);
        this.errorMessage = Edit_User_error.error.message;
        console.log("Profile value",this.Profile.value)
      }
        }
    }
    })
    }

  }
}
