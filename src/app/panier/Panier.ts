
import {Catalogue} from '../catalogue/Catalogue';
import {Produit} from '../produit/Produit';

export class Panier{
 public catalogue: Catalogue;
  private total: number;
  
  constructor(){
    
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