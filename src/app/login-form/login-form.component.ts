import { Component, OnInit } from '@angular/core';
import { Login } from "../login";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  model : Login = new Login("","");
  models : Login[] = [];
  submitted : boolean = false;

  constructor() { 
   let model : Login = new Login("username","password");
    this.models.push(model);
    console.log(this.models.length)
  }

  onSubmit(){
    this.submitted = true;
  }
  newUser(){
    this.models.push(this.model);
    this.model = new Login("","");
  }
  get diagnostic() {return JSON.stringify(this.models)}
}
