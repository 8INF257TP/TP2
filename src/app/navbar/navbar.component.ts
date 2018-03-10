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

<<<<<<< HEAD
  ngOnChanges(changes: SimpleChanges){
    this.connected = this.userService.connected;
=======
  createNavbarItems(): void 
  {
    if (localStorage.getItem('connectedUser') == 'yes')
    {
        var a1 = document.getElementById('a1');
        a1.innerHTML = 'Panier';
        a1.setAttribute('routerLink', 'panier');
        a1.setAttribute('href', 'panier');
        
        var a2 = document.getElementById('a2');
        a2.innerHTML = 'Deconnection';
        a2.setAttribute('routerLink', 'home');
        a2.onclick = this.deconnectionHandler();
        a2.setAttribute('href', 'home');
    }
    else
    {
        var a1 = document.getElementById('a1');
        a1.innerHTML = 'Sign-in';
        a1.setAttribute('routerLink', 'sign-in');
        a1.setAttribute('href', 'sign-in');
      
        var a2 = document.getElementById('a2');
        a2.innerHTML = 'Sign-up';
        a2.setAttribute('routerLink', 'sign-up');
        a2.setAttribute('href', 'sign-up');
    }
>>>>>>> f0279e592a46b1a85427277efc8b1aabb27aad7b
  }
}
