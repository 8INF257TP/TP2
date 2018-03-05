import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Produit } from './produit/Produit';
import { IQteProduit } from './catalogue/Catalogue'


@Injectable()
export class ProduitService {
  produits: IQteProduit[] = [];

  constructor() { }

  addProduct(produit: IQteProduit){
    this.produits.push(produit);

    console.log("test")
  }

  getProduct(){
    return this.produits;
  }
}
