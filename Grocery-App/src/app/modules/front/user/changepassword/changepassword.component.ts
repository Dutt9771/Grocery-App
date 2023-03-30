import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ChangePassword } from 'src/app/shared/Models/changepassword';
import { EdituserService } from 'src/app/shared/services/edituser/edituser.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  constructor(private _editUser:EdituserService){}
  @Input() Change_Password :any =new FormGroup({
    currentpassword: new FormControl('', [
       Validators.required,
       Validators.minLength(8)
     ]),
     newpassword: new FormControl('', [
       Validators.required,
       Validators.minLength(8)
     ]),
     confirm_new_password: new FormControl('', [
       Validators.required,
       Validators.minLength(8),
       this.matchPasswordValidator()
     ]),
    })

    get get_Change_password(){
      return this.Change_Password.controls
    }

    currentpassword:any
    newpassword:any
    User_login_Token:any
    errorMessage:any
    Change_Password_Obj:any
    Change_Password_Click(){
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
        this._editUser.Change_Password(Change_Password_body).subscribe({next:(Change_pass_res)=>{
            console.log("Change_pass_res",Change_pass_res)
            this.errorMessage=""
        },
        error:(Change_Password_error)=>{ 
          console.log("Change_Password status",Change_Password_error.status)
          console.log("Change_Password_error",Change_Password_error)
          if(Change_Password_error.status){
            this.errorMessage = Change_Password_error.error.message;
        console.log("Chnage_Password.value",this.Change_Password.value)
        }
      }
      })
      }
  
    }
    // matchPasswordValidator(): ValidatorFn {
    // return (control: AbstractControl): {[key: string]: any} | null => {
    //   const password = this.Register.value['password'];
    //   const confirm_password = control.value;
    //   return password === confirm_password ? null : {matchPassword: {value: control.value}};
    // };
    matchPasswordValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const newpassword = control.root.get('newpassword')?.value;
        const confirmPassword = control.value;
  
        return newpassword === confirmPassword ? null : { matchPassword: { value: control.value } };
      };
    }
}
