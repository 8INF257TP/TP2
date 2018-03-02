import {Produit} from '../produit/produit'



export class Catalogue{
  private produits: Array<[Produit, number]>;
  
  constructor() {}
  
  addProduit(produit: Produit): void{
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
  }
};