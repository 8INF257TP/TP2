import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../produit/Produit';
import {ProduitService} from '../produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit { 
   @Input() produit: Produit;
   @Output() onAjouterPanier = new EventEmitter<Produit>();
   
   
  constructor(private produitService: ProduitService) { }

  ngOnInit() {
  }

}
