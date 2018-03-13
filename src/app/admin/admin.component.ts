import { Component, OnInit, OnChanges} from '@angular/core';
import { IQteProduit, Catalogue } from '../Catalogue'
import { UserService } from '../user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnChanges {
  catalogueDeProduitsAModifier: Catalogue;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.catalogueDeProduitsAModifier = new Catalogue();
    if (this.userService.connected == false) {
      this.router.navigateByUrl('sign-in');
    }
  }

  ngOnChanges() {

  }

  removeProductCallBack(produit: IQteProduit) {
    this.catalogueDeProduitsAModifier.enleverProduit(produit);
    
  }

  modifProductCallBack() {
    this.router.navigateByUrl('modif-produit');
  }

  ajoutProduitCallBack() {
    this.router.navigateByUrl('ajout-produit');
  }

}
