import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor(private router : Router){}
  redirectToHome(){
  this.router.navigateByUrl('/home');
  }
}
