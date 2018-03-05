import {Produit} from '../produit/Produit'
import { DonneeProduits } from './DonneeProduits';

export class Catalogue{
  public produits: [{Produit, number}]; // la liste contient le produit ainsi que le nombre de ce produit dans le catalogue
  private donnee: DonneeProduits;
  
  constructor() {
    this.donnee = new DonneeProduits();
  }

  private findProduit(element: {Produit, number}): boolean {
    let produit: Produit = element[0];
    
    
    
    return false;
  }
};