import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { EdituserService } from 'src/app/shared/services/edituser/edituser.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  constructor(private _editUser:EdituserService){}
  @Input() Chnage_Password :any =new FormGroup({
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
      return this.Chnage_Password.controls
    }

    currentpassword:any
    newpassword:any
    User_login_Token:any

    Change_Password_Obj:any
    Chnage_Password_Click(){
      let userData = this.Chnage_Password.value
      console.log("user data:",userData);
      
      this.Change_Password_Obj=this.Chnage_Password.getRawValue()
      let Change_Password_body={
        oldpassword:userData.currentpassword,
        newpassword:userData.newpassword
      }
      console.log("Change Password",Change_Password_body)
      if(this.Chnage_Password.valid){
        this.User_login_Token=JSON.parse(localStorage.getItem("User_login_Token"))
        this._editUser.Change_Password(Change_Password_body).subscribe({next:(Change_pass_res)=>{
            console.log("Change_pass_res",Change_pass_res)
        }})
        console.log(this.Chnage_Password.value)
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
