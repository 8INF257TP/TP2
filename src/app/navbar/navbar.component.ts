import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  connected: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.connected = this.userService.connected;
  }
}
