import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,ValidationErrors,ValidatorFn,Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private _RegisterService:RegisterService){}
  // For State and City
  selectedState: any;
  selectedCity: any;

  states = [  
    {     name: 'Andaman and Nicobar Islands',     cities: ['Port Blair'] 
  },
  { 
    name: 'Andhra Pradesh', 
    cities: [
      'Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor', 
      'Dowlaiswaram', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada', 
      'Kurnool', 'Machilipatnam', 'Nagarjunakoṇḍa', 'Rajahmundry', 
      'Srikakulam', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 
      'Vizianagaram', 'Yemmiganur'
    ] 
  },
  { 
    name: 'Arunachal Pradesh', 
    cities: [
      'Itanagar'
    ] 
  },
  { 
    name: 'Assam', 
    cities: [
      'Dhuburi', 'Dibrugarh', 'Dispur', 'Guwahati', 'Jorhat', 
      'Nagaon', 'Sibsagar', 'Silchar', 'Tezpur', 'Tinsukia'
    ] 
  },
  { 
    name: 'Bihar', 
    cities: [
      'Ara', 'Baruni', 'Begusarai', 'Bettiah', 'Bhagalpur', 
      'Bihar Sharif', 'Bodh Gaya', 'Buxar', 'Chapra', 'Darbhanga', 
      'Dehri', 'Dinapur Nizamat', 'Gaya', 'Hajipur', 'Jamalpur', 
      'Katihar', 'Madhubani', 'Motihari', 'Munger', 'Muzaffarpur', 
      'Patna', 'Purnia', 'Pusa', 'Saharsa', 'Samastipur', 'Sasaram', 
      'Sitamarhi', 'Siwan'
    ] 
  },
  { 
    name: 'Chandigarh', 
    cities: [
      'Chandigarh'
    ] 
  },
  { 
    name: 'Chhattisgarh', 
    cities: [
      'Ambikapur', 'Bhilai', 'Bilaspur', 'Dhamtari', 'Durg', 
      'Jagdalpur', 'Raipur', 'Rajnandgaon'
    ] 
  },
  { 
    name: 'Dadra and Nagar Haveli and Daman and Diu', 
    cities: [
      'Daman', 'Diu'
    ] 
  },
  { 
    name: 'Delhi', 
    cities: [
      'Delhi', 'New Delhi'
    ] 
  },
  { 
    name: 'Goa', 
    cities: [
      'Mormugao', 'Panaji'
    ] 
  },
  { 
    name: 'Gujarat', 
    cities: [
      'Ahmedabad', 'Amreli', 'Bharuch', 'Bhavnagar', 'Bhuj', 
      'Dwarka', 'Gandhinagar', 'Godhra', 'Jamnagar', 'Junagadh', 
      'Kandla', 'Khambhat', 'Kheda', 'Mahesana', 'Morvi', 'Nadiad', 'Navsari', 'Okha', 'Palanpur',
      'Patan', 'Porbandar', 'Rajkot', 'Surat', 'Surendranagar',
      'Valsad', 'Veraval', 'Vadodara'
      ]
      },
      {
      name: 'Haryana',
      cities: [
      'Ambala', 'Bhiwani', 'Chandigarh', 'Faridabad', 'Fatehabad',
      'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal',
      'Kurukshetra', 'Mahendragarh', 'Narnaul', 'Narwana', 'Palwal',
      'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat',
      'Tohana', 'Yamunanagar'
      ]
      },
      {
      name: 'Himachal Pradesh',
      cities: [
      'Bilaspur', 'Chamba', 'Dalhousie', 'Dharamsala', 'Hamirpur',
      'Kangra', 'Kullu', 'Mandi', 'Nahan', 'Shimla', 'Una'
      ]
      },
      {
      name: 'Jammu and Kashmir',
      cities: [
      'Anantnag', 'Baramula', 'Doda', 'Gulmarg', 'Jammu', 'Kathua',
      'Leh', 'Punch', 'Rajauri', 'Srinagar', 'Udhampur'
      ]
      },
      {
      name: 'Jharkhand',
      cities: [
      'Bokaro', 'Chaibasa', 'Deoghar', 'Dhanbad', 'Dumka', 'Giridih',
      'Hazaribag', 'Jamshedpur', 'Jharia', 'Rajmahal', 'Ranchi',
      'Saraikela'
      ]
      },
      {
      name: 'Karnataka',
      cities: [
      'Badami', 'Ballari', 'Bangalore', 'Belgavi', 'Bhadravati',
      'Bidar', 'Chikkamagaluru', 'Chitradurga', 'Davangere',
      'Halebidu', 'Hassan', 'Hubballi-Dharwad', 'Kalaburagi',
      'Kolar', 'Madikeri', 'Mandya', 'Mangaluru', 'Mysuru',
      'Raichur', 'Shivamogga', 'Shravanabelagola', 'Tumkuru', 'Udupi'
      ]
      },
      {
      name: 'Kerala',
      cities: [
      'Alappuzha', 'Badagara', 'Idukki', 'Kannur', 'Kochi', 'Kollam',
      'Kottayam', 'Kozhikode', 'Mattancherry', 'Palakkad', 'Thalassery',
      'Thiruvananthapuram', 'Thrissur'
      ]
      },
      {
      name: 'Ladakh',
      cities: [
      'Kargil', 'Leh'
      ]
      }]

  getCities(): string[] {
    const state = this.states.find(s => s.name === this.selectedState);
    return state ? state.cities : [];
  } 

  cities: string[] = [];

// for Validation


  // ngOnInit() {
  //   this.Register = this.fb.group({
  //     password: ['', [Validators.required]],
  //     confirm_password: ['', [Validators.required]]
  //   }, {validator: this.checkPasswords });
  // }
 @Input() Register :any =new FormGroup({
   name:new FormControl ("",[
     Validators.required,
     Validators.minLength(5)
   ]),
    email:new FormControl ("",[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.matchPasswordValidator()
    ]),
     //,address:new FormControl ("",[
    //   Validators.required
    // ]),
    // address_2:new FormControl ("",[
    //   Validators.required
    // ]),
    // city:new FormControl ("",[
    //   Validators.required
    // ]),
    // state:new FormControl ("",[
    //   Validators.required
    // ]),
    // zip:new FormControl ("",[
    //   Validators.required,
    //   Validators.maxLength(6),
    //   Validators.minLength(4),
    //   Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')
    // ]),

    })

    get get_Register(){
      return this.Register.controls
    }
    Reg_click(){
        console.log(this.Register.value)
        this._RegisterService.get_Register_data(this.Register.value)
  
    }
    // matchPasswordValidator(): ValidatorFn {
    // return (control: AbstractControl): {[key: string]: any} | null => {
    //   const password = this.Register.value['password'];
    //   const confirm_password = control.value;
    //   return password === confirm_password ? null : {matchPassword: {value: control.value}};
    // };
    matchPasswordValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const password = control.root.get('password')?.value;
        const confirmPassword = control.value;
  
        return password === confirmPassword ? null : { matchPassword: { value: control.value } };
      };
    }
    
  }
