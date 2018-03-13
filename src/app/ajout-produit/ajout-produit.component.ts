import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validerAjout() {
    alert("Ajout reussie");
    this.router.navigateByUrl('catalogue');
  }

}
