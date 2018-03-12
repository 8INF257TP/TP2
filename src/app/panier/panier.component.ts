import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Panier } from '../Panier';
import { Produit} from '../Produit';
import { UserService } from '../user.service';
import { IQteProduit } from '../Catalogue';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

public panier: Panier = new Panier();
produit: Produit;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.panier.produits = this.userService.getCurrentUserPanier();
    this.panier.total = this.userService.getCurrentUserTotal();
  }

  payerPanier(){
    this.userService.clearTotal();
    this.userService.clearProduits();
    this.router.navigateByUrl('paiement');
  }
}
