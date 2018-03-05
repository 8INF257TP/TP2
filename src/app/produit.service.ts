import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Produit } from './produit/Produit';

@Injectable()
export class ProduitService {
  produits: Produit[] = [];

  constructor() { }

  addProduct(produit: Produit){
    this.produits.push(produit);

    console.log("test");
  }

  getProduct(){
    return this.produits;
  }
}
