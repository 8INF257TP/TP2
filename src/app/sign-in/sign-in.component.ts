import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from "@angular/router";
import { UserService } from '../user.service';
import { User } from '../user/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    email: null,
    address: null,
    city: null,
    country: null,
    panier: null
  };

  constructor(private rout: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onClickSignIn(user:User) {
    this.userService.connect(user.username, user.password);
  }
}
