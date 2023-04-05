import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User_Address } from 'src/app/shared/Models/user_address';
import { EdituserService } from 'src/app/shared/services/edituser/edituser.service';
import { CountryService } from 'src/app/shared/services/country/country.service';

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent {
  countries:any;
  // state:any;
  // city:any;
constructor(private router:ActivatedRoute,private _edituserService:EdituserService,private _countryservice:CountryService,private _snackBar:MatSnackBar,private route:Router,private toastr:ToastrService){
  this.countries = this._countryservice.getCountries();
  
}
    // For State and City
  selectedState: any;
  selectedCity: any;
  states:any=[]
  City:any=[]
  // states = [  
  //   {     name: 'Andaman and Nicobar Islands',     cities: ['Port Blair'] 
  // },
  // { 
  //   name: 'Andhra Pradesh', 
  //   cities: [
  //     'Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor', 
  //     'Dowlaiswaram', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada', 
  //     'Kurnool', 'Machilipatnam', 'Nagarjunakoṇḍa', 'Rajahmundry', 
  //     'Srikakulam', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 
  //     'Vizianagaram', 'Yemmiganur'
  //   ] 
  // },
  // { 
  //   name: 'Arunachal Pradesh', 
  //   cities: [
  //     'Itanagar'
  //   ] 
  // },
  // { 
  //   name: 'Assam', 
  //   cities: [
  //     'Dhuburi', 'Dibrugarh', 'Dispur', 'Guwahati', 'Jorhat', 
  //     'Nagaon', 'Sibsagar', 'Silchar', 'Tezpur', 'Tinsukia'
  //   ] 
  // },
  // { 
  //   name: 'Bihar', 
  //   cities: [
  //     'Ara', 'Baruni', 'Begusarai', 'Bettiah', 'Bhagalpur', 
  //     'Bihar Sharif', 'Bodh Gaya', 'Buxar', 'Chapra', 'Darbhanga', 
  //     'Dehri', 'Dinapur Nizamat', 'Gaya', 'Hajipur', 'Jamalpur', 
  //     'Katihar', 'Madhubani', 'Motihari', 'Munger', 'Muzaffarpur', 
  //     'Patna', 'Purnia', 'Pusa', 'Saharsa', 'Samastipur', 'Sasaram', 
  //     'Sitamarhi', 'Siwan'
  //   ] 
  // },
  // { 
  //   name: 'Chandigarh', 
  //   cities: [
  //     'Chandigarh'
  //   ] 
  // },
  // { 
  //   name: 'Chhattisgarh', 
  //   cities: [
  //     'Ambikapur', 'Bhilai', 'Bilaspur', 'Dhamtari', 'Durg', 
  //     'Jagdalpur', 'Raipur', 'Rajnandgaon'
  //   ] 
  // },
  // { 
  //   name: 'Dadra and Nagar Haveli and Daman and Diu', 
  //   cities: [
  //     'Daman', 'Diu'
  //   ] 
  // },
  // { 
  //   name: 'Delhi', 
  //   cities: [
  //     'Delhi', 'New Delhi'
  //   ] 
  // },
  // { 
  //   name: 'Goa', 
  //   cities: [
  //     'Mormugao', 'Panaji'
  //   ] 
  // },
  // { 
  //   name: 'Gujarat', 
  //   cities: [
  //     'Ahmedabad', 'Amreli', 'Bharuch', 'Bhavnagar', 'Bhuj', 
  //     'Dwarka', 'Gandhinagar', 'Godhra', 'Jamnagar', 'Junagadh', 
  //     'Kandla', 'Khambhat', 'Kheda', 'Mahesana', 'Morvi', 'Nadiad', 'Navsari', 'Okha', 'Palanpur',
  //     'Patan', 'Porbandar', 'Rajkot', 'Surat', 'Surendranagar',
  //     'Valsad', 'Veraval', 'Vadodara'
  //     ]
  //     },
  //     {
  //     name: 'Haryana',
  //     cities: [
  //     'Ambala', 'Bhiwani', 'Chandigarh', 'Faridabad', 'Fatehabad',
  //     'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal',
  //     'Kurukshetra', 'Mahendragarh', 'Narnaul', 'Narwana', 'Palwal',
  //     'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat',
  //     'Tohana', 'Yamunanagar'
  //     ]
  //     },
  //     {
  //     name: 'Himachal Pradesh',
  //     cities: [
  //     'Bilaspur', 'Chamba', 'Dalhousie', 'Dharamsala', 'Hamirpur',
  //     'Kangra', 'Kullu', 'Mandi', 'Nahan', 'Shimla', 'Una'
  //     ]
  //     },
  //     {
  //     name: 'Jammu and Kashmir',
  //     cities: [
  //     'Anantnag', 'Baramula', 'Doda', 'Gulmarg', 'Jammu', 'Kathua',
  //     'Leh', 'Punch', 'Rajauri', 'Srinagar', 'Udhampur'
  //     ]
  //     },
  //     {
  //     name: 'Jharkhand',
  //     cities: [
  //     'Bokaro', 'Chaibasa', 'Deoghar', 'Dhanbad', 'Dumka', 'Giridih',
  //     'Hazaribag', 'Jamshedpur', 'Jharia', 'Rajmahal', 'Ranchi',
  //     'Saraikela'
  //     ]
  //     },
  //     {
  //     name: 'Karnataka',
  //     cities: [
  //     'Badami', 'Ballari', 'Bangalore', 'Belgavi', 'Bhadravati',
  //     'Bidar', 'Chikkamagaluru', 'Chitradurga', 'Davangere',
  //     'Halebidu', 'Hassan', 'Hubballi-Dharwad', 'Kalaburagi',
  //     'Kolar', 'Madikeri', 'Mandya', 'Mangaluru', 'Mysuru',
  //     'Raichur', 'Shivamogga', 'Shravanabelagola', 'Tumkuru', 'Udupi'
  //     ]
  //     },
  //     {
  //     name: 'Kerala',
  //     cities: [
  //     'Alappuzha', 'Badagara', 'Idukki', 'Kannur', 'Kochi', 'Kollam',
  //     'Kottayam', 'Kozhikode', 'Mattancherry', 'Palakkad', 'Thalassery',
  //     'Thiruvananthapuram', 'Thrissur'
  //     ]
  //     },
  //     {
  //     name: 'Ladakh',
  //     cities: [
  //     'Kargil', 'Leh'
  //     ]
  //     }]

  // getCities(): string[] {
  //   const state = this.states.find(s => s.name === this.selectedState);
  //   return state ? state.cities : [];
  // } 
  

  cities: string[] = [];
  address_id:any
  Address_btn:any="ADD Address"
  Edit_address_body:any
  User_address_data:any
  ngOnInit(){
    this.User_address_Form()
      this.country.valueChanges.subscribe((country) => {
  
      if (country) {
        this.states = this._countryservice.getStatesByCountry(country);
        // console.log("states",this.states)
      }
    });
  
    this.state.valueChanges.subscribe((state) => {
  
      if (state) {
        this.City = this._countryservice.getCitiesByState(this.country.value, state);
        // console.log("City",this.City)
  
      }
    });
    this.router.paramMap.subscribe(params=>{
      this.address_id=params.get('id')
      if(this.address_id){
        this._edituserService.Get_User_Details().subscribe({next:(User_details_res)=>{
          this.User_address_data=User_details_res.data.addresses
          console.log("User_Details",User_details_res.data)
          console.log("User_Details",User_details_res.data.addresses)
          this.User_address_data = this.User_address_data.filter(User_address_data => User_address_data.id == this.address_id);
          console.log("User_Details",this.User_address_data)
          console.log("this.User_address_data.address_line_1",this.User_address_data[0].address_line_1)
          this.User_Address_Add.patchValue({"address_line_1": this.User_address_data[0].address_line_1,
          "address_line_2": this.User_address_data[0].address_line_2,
          "area": this.User_address_data[0].area,
          "country": this.User_address_data[0].country,
          "state": this.User_address_data[0].state,
          "city": this.User_address_data[0].city,
          "postal_code": this.User_address_data[0].postal_code,
          "landmark": this.User_address_data[0].landmark,
          "tag": this.User_address_data[0].tag});
          // this.Profile.get('firstName').setValue("this.User_Profile_Obj.first_name");
        // this.Profile.get('lastName').setValue(this.User_Profile_Obj.last_name);
        },error:(User_details_error)=>{
          console.log("Getuserdetail_error",User_details_error)
        }})
    
        this.Address_btn="EDIT Address"
      }
    })

  }
  country = new FormControl ("",[
    Validators.required
  ]);
  state = new FormControl ("",[
    Validators.required
  ]);
  city = new FormControl ("",[
    Validators.required
  ])
  User_Address_Add:any
  User_Address_Add_Arr=[]
  User_address_Form(){
  
    this.User_Address_Add =new FormGroup({
           
            address_line_1:new FormControl ("",[
              Validators.required
            ]),
            address_line_2:new FormControl ("",[
              Validators.required
            ]),
            area:new FormControl ("",[
              Validators.required
            ]),
            city:this.city,
            state:this.state,
            country:this.country,
            postal_code:new FormControl ("",[
              Validators.required,
              Validators.maxLength(6),
              Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')
            ]),
            landmark:new FormControl ("",[
              Validators.required
            ]),
            tag:new FormControl ("",[
              Validators.required
            ]),
        
          })
  }

        get get_User_Address(){
          return this.User_Address_Add.controls
        }
        Arr:any
        User_details:any
        User_address:any
        User_Address_Add_click(){


          if(this.Address_btn=="ADD Address"){

            if(this.User_Address_Add.valid){
              console.log("this.User_Address_Add.value",this.User_Address_Add.value)
              this._edituserService.Add_User_Address(this.User_Address_Add.value).subscribe({next:
                (User_Address_Add_res)=>{
                  console.log("User_Address_Add_res",User_Address_Add_res)
                  
              // this.Arr = JSON.stringify([]);
              //   if (!localStorage.getItem('User_address')) {
                //     localStorage.setItem('User_address', this.Arr);
                //     }
                // this._edituserService.set_User_addresses(this.User_Address_Add.value)
                // let Merge = JSON.parse(localStorage.getItem('User_address'));
                
                  this.User_details=JSON.parse(sessionStorage.getItem('Login_User'))
                  // console.log("User_details",this.User_details)
                  this.User_address={
                    username:this.User_details.username,
                    Address:this.User_Address_Add.value
                  }
                  // console.log("User_address",this.User_address)
                  this.toastr.success('Address Added Successfully');

                  // Merge.push(this.User_address);
                  // console.log("Merge",Merge)
                // localStorage.setItem("User_address", JSON.stringify(Merge));
                this.route.navigate(['/front/user/user-profile/manageaddress'])
            },
          error:(User_Address_Add_error)=>{
            console.log("User_Address_Add_error",User_Address_Add_error)
            this.toastr.error(User_Address_Add_error.error.message);
          }})
          }
              }
              else{
                this._edituserService.Edit_User_Address(this.User_Address_Add.value).subscribe({next:(Edit_address_res)=>{
                  console.log("Edit_address_res",Edit_address_res)
                  this.Address_btn="ADD Address"
                  this.route.navigate(["/front/user/user-profile/manageaddress"])
                },error:(Edit_address_error)=>{
                  console.error("Edit_address_error",Edit_address_error)
                }})
              }
        }
}
