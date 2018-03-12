import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../Produit';
import { UserService } from '../user.service';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit { 
   @Input() produit: Produit;
   add: boolean;
   cart: boolean;
   
  constructor(private userService: UserService, private router: Router, private produitService: ProduitService){ 
    
  }
   produitSelectionne: Produit;

  ngOnInit() {
    if (this.router.url == '/admin') {
      this.cart = false;
    }
    else {
      this.cart = true;
    }

    if(this.router.url == '/catalogue'){
      this.add = true;
    }
    else if(this.router.url == '/panier'){
      this.add = false;
    }
  }

  selectionProduit(produit: Produit) {
    this.produitSelectionne = produit;
  }
}
