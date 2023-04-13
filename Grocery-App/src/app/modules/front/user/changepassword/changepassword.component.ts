import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePassword } from 'src/app/shared/Models/changepassword';
import { UserService } from 'src/app/shared/services/user/user.service';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  Change_Password:FormGroup
  constructor(private route:Router,private _userService:UserService,private _snackBar:MatSnackBar,private toastr:ToastrService,private fb:FormBuilder){}
    ngOnInit(){ 
      window.scrollTo(0,0) 
    // this.toastr.success('Change Password Successfully');

    this.Change_Password_Form()
  }
  
  
  Change_Password_Form(){
    
    this.Change_Password =this.fb.group({
      currentpassword: [null, [
        Validators.required,
        Validators.minLength(8)
      ]],
      newpassword: [null, Validators.compose([
        // 1. Password Field is Required
        Validators.required,
        // 2. check whether the entered password has a number
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        // 3. check whether the entered password has upper case letter
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // 4. check whether the entered password has a lower-case letter
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // 5. check whether the entered password has a special character
        CustomValidators.patternValidator(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, { hasSpecialCharacters: true }),
        // 6. Has a minimum length of 8 characters
        Validators.minLength(8)])
     ],
      
      confirm_new_password: [null, [
        Validators.required,
        Validators.minLength(8),
        this.matchPasswordValidator()
      ]],
    }),
    {
      validator: CustomValidators.passwordMatchValidator
    }
  }
    
    get get_Change_password(){
      return this.Change_Password.controls
    }

    currentpassword:any
    newpassword:any
    User_login_Token:any
    errorMessage:any
    Change_Password_Obj:any
    Change_Password_Click(){
      if(this.Change_Password.valid){

        let userData = this.Change_Password.value
        console.log("user data:",userData);

      this.Change_Password_Obj=this.Change_Password.getRawValue()
      let Change_Password_body:ChangePassword={
        oldPassword:userData.currentpassword,
        newPassword:userData.newpassword
      }
      console.log("Change Password",Change_Password_body)
      if(this.Change_Password.valid){
        this.User_login_Token=JSON.parse(localStorage.getItem("User_login_Token"))
        this._userService.Change_Password(Change_Password_body).subscribe({next:(Change_pass_res)=>{
          if(Change_pass_res){

            console.log("Change_pass_res",Change_pass_res)
            // const success=Change_pass_res
            // setTimeout(() => {
              //   this._snackBar.open("Change Password Succesfully", "OK");
              // }, 3000);
              this.route.navigate(['/home'])
              this.toastr.success('Password Change Successfully');
            }
        },
        error:(Change_Password_error)=>{ 
          console.log("Change_Password status",Change_Password_error.status)
          console.log("Change_Password_error",Change_Password_error)
          if(Change_Password_error.status){
            // setTimeout(() => {
            //   this._snackBar.open(Change_Password_error.error.message, "OK");
            // }, 3000);
            this.errorMessage = Change_Password_error.error.message;
            this.toastr.error(Change_Password_error.error.message);
            console.log("Chnage_Password.value",this.Change_Password.value)
          }
        }
      })
    }
  }else{
    this.toastr.error("All Fields Required");
  }
    
  }
    matchPasswordValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const newpassword = control.root.get('newpassword')?.value;
        const confirmPassword = control.value;
  
        return newpassword === confirmPassword ? null : { matchPassword: { value: control.value } };
      };
    }
}
