import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Produit } from './produit/Produit';
import { IQteProduit } from './catalogue/Catalogue'


@Injectable()
export class ProduitService {
  produits: IQteProduit[] = [];
  total: number = 0;
  produitSelectionne: Produit;

  constructor(private router: Router) { }

  onSelectProduit(produit: Produit) : void {
    this.produitSelectionne = produit;
  }
  
  getProduct(){
    return this.produits;
  }

  getTotal(){
    return this.total;
  }
}
