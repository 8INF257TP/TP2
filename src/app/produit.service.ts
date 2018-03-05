import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Produit } from './produit/Produit';
import { IQteProduit } from './catalogue/Catalogue'


@Injectable()
export class ProduitService {
  produits: IQteProduit[] = [];

  constructor() { }

  addProduct(element: IQteProduit) : void{
    
    let index: number = 0;
    
    for(let produit of this.produits){
      if(element.produit.id == produit.produit.id){
        this.produits[index].quantite += element.quantite;
        return;
      }
      index++;
    }

    this.produits.push(element);

    console.log("test");
  }

  getProduct(){
    return this.produits;
  }
}
