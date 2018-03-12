import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Produit } from './Produit';
import { IQteProduit } from './Catalogue'


@Injectable()
export class ProduitService {
  produits: IQteProduit[] = [];
  total: number = 0;
  produitSelectionne: Produit;
  cart: boolean;

  constructor(private router: Router) { }

  onSelectProduit(produit: Produit, cartEnabled: boolean) : void {
    this.produitSelectionne = produit;
    this.cart = cartEnabled;
  }

  getProduct(){
    return this.produits;
  }

  getTotal(){
    return this.total;
  }
}
