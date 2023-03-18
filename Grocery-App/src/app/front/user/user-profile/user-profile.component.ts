import { Component, OnInit } from '@angular/core';
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
      this.user = localStorage.getItem('User');
      this.RegisterData= JSON.parse(localStorage.getItem('Register_User'));
      if (this.user || this.RegisterData) {
        try {
          this.user = JSON.parse(this.user);
        } catch (e) {
          console.error('Error parsing user data from local storage:', e);
          localStorage.removeItem('User'); // optionally, remove the invalid user data from local storage
        }
      }
    }
    
  }

