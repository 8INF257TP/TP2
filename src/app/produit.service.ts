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

  clearProduits(){
    while (this.produits.length > 0){
      this.produits.pop();
    }
  }

  clearTotal(){
    this.total = 0;
  }
}
