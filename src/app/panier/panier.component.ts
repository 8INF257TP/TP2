import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Panier } from './Panier'
import { Produit} from '../produit/Produit'

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

public panier: Panier = new Panier();
produit: Produit;

  constructor() { }


  ngOnInit() {
  }

  onAjouterPanier(produit: Produit){
    this.panier.catalogue.produits.push(produit);

    console.log("le produit a ete ajoute au panier");
  }

}
