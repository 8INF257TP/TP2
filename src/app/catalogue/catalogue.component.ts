import { Component, OnInit, Output } from '@angular/core';
import { Catalogue } from '../catalogue/Catalogue'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  catalogue: Catalogue;
  
  constructor() {}

  ngOnInit() {
    this.catalogue = new Catalogue();
  }

}
