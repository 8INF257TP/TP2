import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../produit/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit { 
   @Input() produit: Produit;
   @Output() onAjouterPanier = new EventEmitter<Produit>();
   
   
  constructor() { }

  ngOnInit() {
  }

  AjouterPanier(produit: Produit){
  this.onAjouterPanier.emit(produit);

    console.log("AjouterPanier()");
  }
}
