import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css']
})
export class ModifProduitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validerModifs() {
    alert("Modification reussie");
    this.router.navigateByUrl('catalogue');
  }
}
