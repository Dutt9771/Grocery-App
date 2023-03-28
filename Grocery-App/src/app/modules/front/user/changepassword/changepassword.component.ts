import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
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

    Chnage_Password_Click(){
      if(this.Chnage_Password.valid){

        console.log(this.Chnage_Password.value)
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
