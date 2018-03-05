import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Panier } from './Panier'
import { Produit} from '../produit/Produit'
import { ProduitService } from '../produit.service'
import { IQteProduit } from '../catalogue/Catalogue';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

public panier: Panier = new Panier();
produit: Produit;

  constructor(private produitService: ProduitService) { }


  ngOnInit() {
    console.log("ngOnInit()");
    this.panier.catalogue.produits = this.produitService.getProduct();
  }

  ajouterProduit(produit: IQteProduit) : void{
    this.panier.catalogue.produits.push(produit);

    console.log("le produit a ete ajoute au panier");
  }

}
