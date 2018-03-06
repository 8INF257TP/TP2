import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from "@angular/router";
import { User } from '../user/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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

  onClickSignIn(user:User) {

    if (localStorage.getItem("username") == user.username &&
        localStorage.getItem("password") == user.password) 
    {

          localStorage.setItem('connectedUser', 'yes');
          alert("Signin successful!");
          this.router.navigate(['catalogue']);
          window.location.reload(true);         // Hack needed to display the proper items on the navbar
    }
    else
    {
      alert("Wrong username/password pair");
    }    
  }
}
