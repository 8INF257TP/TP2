import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit/Produit';
<<<<<<< HEAD
import { UserService } from '../user.service';
=======
import { ProduitService } from '../produit.service';
>>>>>>> f0279e592a46b1a85427277efc8b1aabb27aad7b

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit { 
   @Input() produit: Produit;
   add: boolean;
   
<<<<<<< HEAD
  constructor(private userService: UserService, private router: Router){ }
=======
   produitSelectionne: Produit;
   
  constructor(private produitService: ProduitService) { }
>>>>>>> f0279e592a46b1a85427277efc8b1aabb27aad7b

  ngOnInit() {
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
