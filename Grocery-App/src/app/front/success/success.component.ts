import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  
  constructor(private route:Router){}
  ngOnInit(){
    setTimeout(()=>{
      this.route.navigate(['/front/home'])
    },6000);
  }
}