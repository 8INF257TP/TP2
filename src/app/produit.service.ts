import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Produit } from './produit/Produit';
import { IQteProduit } from './catalogue/Catalogue'


@Injectable()
export class ProduitService {
  produits: IQteProduit[] = [];
  total: number = 0;

  constructor(private router: Router) { }

  getProduct(){
    return this.produits;
  }

  getTotal(){
    return this.total;
  }

  clearProduits(){
    while (this.produits.length > 0){
      this.produits.pop();
    }
  }

  clearTotal(){
    this.total = 0;
  }
}
