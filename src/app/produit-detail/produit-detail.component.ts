import { ProduitService } from '../produit.service';
import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit/Produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  produit: Produit;
  
  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produit = this.produitService.produitSelectionne;
  }
}
