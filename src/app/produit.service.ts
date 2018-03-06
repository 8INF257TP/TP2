import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Produit } from './produit/Produit';
import { IQteProduit } from './catalogue/Catalogue'


@Injectable()
export class ProduitService {
  produits: IQteProduit[] = [];
  total: number = 0;

  constructor() { }

  addProduct(element: IQteProduit) : void{

    console.log("produit ajoute au panier");
    
    let index: number = 0;
    
    for(let produit of this.produits){
      if(element.produit.id == produit.produit.id){
        this.produits[index].quantite += element.quantite;
        this.total += element.produit.price;
        return;
      }
      index++;
    }

    this.produits.push(element);
    this.total += element.produit.price;

  }

  getProduct(){
    return this.produits;
  }

  getTotal(){
    return this.total;
  }
}
