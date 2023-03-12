import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router) {
  }

  // onReload(){
  //   this.router.navigate(['/homepage'],{relativeTo:this.route})
  // }
  login(){
    this.router.navigate(['/homepage'])
  }
}
