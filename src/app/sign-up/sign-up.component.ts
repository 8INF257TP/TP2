import { Component, OnInit, Input } from '@angular/core';
import {RouterModule, Router} from "@angular/router";
import { User } from '../user/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  router: Router;

  user: User = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    email: null,
    address: null,
    city: null,
    country: null
  };
  
  constructor(private rout: Router) {
    this.router = rout;
   }

  ngOnInit() {
  }

  onClickSignUp(user: User) {
  
    localStorage.setItem("lastname", user.lastName);
    localStorage.setItem("firstname", user.firstName);
    localStorage.setItem("username", user.username);
    localStorage.setItem("password", user.password);
    localStorage.setItem("email", user.email);
    localStorage.setItem("address", user.address);
    localStorage.setItem("city", user.city);
    localStorage.setItem("country", user.country);

    alert("Sign-up successful");

    this.router.navigate(['home']);
  }
}


