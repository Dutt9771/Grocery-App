import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Grocery-App';
  loggedInuser:boolean=true
  logout(){
    this.loggedInuser=true;
    localStorage.removeItem('user')
  }
}
