import {Produit} from '../produit/Produit'
import { DonneeProduits } from './DonneeProduits';

export interface IQteProduit {
  produit: Produit;
  quantite: number;
}

export class Catalogue{
  
  public produits: IQteProduit[]; // la liste contient le produit ainsi que le nombre de ce produit dans le catalogue
  private donnee: DonneeProduits;
  
  constructor() {
    this.donnee = new DonneeProduits();
    this.produits = [];
    let prodTemp: Produit[] = this.donnee.genererProduits(10);
    
    for (let produit of prodTemp) {
      this.produits.push({produit: produit, quantite: 1});
    }
  }

  ajouterProduit(element: IQteProduit): void{
    let index: number = 0;
    for(let produit of this.produits){
      if(element.produit.id == produit.produit.id){
        this.produits[index].quantite += element.quantite;
        return;
      }
      index++;
    }
    this.produits.push(element);
  }
};