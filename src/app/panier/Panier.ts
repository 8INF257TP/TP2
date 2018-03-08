
import {IQteProduit} from '../catalogue/Catalogue';
import {Produit} from '../produit/Produit';

export class Panier{
 public produits: IQteProduit[];
 public total: number;
  
  constructor(){
    this.produits = [];
    this.total = 0;
  }
  
  /*
  addProduit(produit: Produit) {
    this.catalogue.addProduit(produit);
    this.total += produit.price;
  }
  
  removeProduit(produit: Produit) {
    this.catalogue.removeProduit(produit);
    this.total -= produit.price;
  }
 
  getTotal(): number {
    return this.total;
  }
  */
}