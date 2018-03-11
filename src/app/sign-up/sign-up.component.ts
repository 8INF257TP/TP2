import { Component, OnInit, Input } from '@angular/core';
import {RouterModule, Router} from "@angular/router";
import { UserService } from '../user.service';
import { User } from '../User';
import { Panier } from '../panier/Panier';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    email: null,
    address: null,
    city: null,
    country: null,
    panier: new Panier()
  };
  
  constructor(private rout: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onClickSignUp(user: User) {
    
    this.userService.newUser(user);
    alert("Sign-up successful");

    this.rout.navigateByUrl('home');
  }
}