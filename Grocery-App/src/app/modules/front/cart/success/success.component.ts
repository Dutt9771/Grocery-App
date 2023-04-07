import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  
  constructor(private route:Router){}
     ngOnInit(){ window.scrollTo(0,0)
    setTimeout(()=>{
      this.route.navigate(['/home'])
    },6000);
  }
}
