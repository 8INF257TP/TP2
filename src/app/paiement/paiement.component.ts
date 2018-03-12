import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  numFacture: string;

  constructor() { }

  ngOnInit() {
    this.numFacture = Math.floor(Math.random()*9999999999 + 1000000000).toPrecision(10);
  }

}
