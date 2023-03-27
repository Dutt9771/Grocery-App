import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: any;
  RegisterData:any
  constructor(private route: ActivatedRoute) { }
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

    @Input() Profile :any =new FormGroup({
      firstname:new FormControl ("",[
        Validators.required,
        Validators.minLength(5)
      ]),
      lastname:new FormControl ("",[
        Validators.required,
        Validators.minLength(5)
      ]),
       email:new FormControl ("",[
         Validators.required,
         Validators.email,
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
       ]),
       alternateemail:new FormControl ("",[
         Validators.required,
         Validators.email,
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
       ]),
       contact:new FormControl('',[Validators.required,Validators.pattern("[- +()0-9]{13}")]),
       alternatecontact:new FormControl('',[Validators.required,Validators.pattern("[- +()0-9]{13}")]),
       dob:new FormControl('',[Validators.required])
   
       })
   
       get get_Profile(){
         return this.Profile.controls
       }
   
       Save_Profile(){
         if(this.Profile.valid){
   
           console.log(this.Profile.value)
           
         }
     
       }

       
    
  }

