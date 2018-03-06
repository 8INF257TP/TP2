import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createNavbarItems();
  }

  createNavbarItems(): void 
  {
    if (localStorage.getItem('connectedUser') == 'yes')
    {
        var a1 = document.getElementById('a1');
        a1.innerHTML = 'Panier';
        a1.setAttribute('routerLink', 'panier');
        a1.setAttribute('href', 'sign-in');
        
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
  }

  deconnectionHandler(): any
  {
    localStorage.setItem("connectedUser", "no");
  }

}
