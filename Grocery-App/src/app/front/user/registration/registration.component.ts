import { Component, Input } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

 @Input() Register :any =new FormGroup({
    email:new FormControl ("",[
      Validators.required,
      Validators.email
    ]),
    name:new FormControl ("",[
      Validators.required,
      Validators.minLength(5)
    ]),
    password:new FormControl ("",[
      Validators.required
    ]),
    address:new FormControl ("",[
      Validators.required
    ]),
    address_2:new FormControl ("",[
      Validators.required
    ]),
    city:new FormControl ("",[
      Validators.required
    ]),
    state:new FormControl ("",[
      Validators.required
    ]),
    zip:new FormControl ("",[
      Validators.required
    ]),

    })



    get get_Register(){
      return this.Register.controls
    }
    Reg_click(){
        console.log(this.get_Register.value)
  
    }
}
