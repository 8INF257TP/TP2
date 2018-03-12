import { ProduitService } from '../produit.service';
import { UserService } from '../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../Produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  produit: Produit;
  cartEnabled: boolean;

  constructor(private userService: UserService,  private produitService: ProduitService) { }

  ngOnInit() {
    this.produit = this.produitService.produitSelectionne;
    this.cartEnabled = this.produitService.cart;
  }
}
