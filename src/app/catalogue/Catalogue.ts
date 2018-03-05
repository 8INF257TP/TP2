import {Produit} from '../produit/Produit'
import { DonneeProduits } from './DonneeProduits';

export class Catalogue{
  public produits: Array<Produit>;
  private donnee: DonneeProduits;
  
  constructor() {
    this.produits = new Array<Produit>();
    this.donnee = new DonneeProduits();
  }
  
  /*addProduit(produit: Produit): void{
    if (this.produits.indexOf([produit, 1]) !== -1){ // a corrigee
      
    } else {
      this.produits.push([produit, 1]);
    }
  }
  
  removeProduit(produit: Produit): void{
    
    const temp = this.produits.indexOf([produit, 1]);
    
    if (temp > -1){ // meme chose que pour addProduit
      this.produits.splice(temp, 1);
    }
  }*/
};