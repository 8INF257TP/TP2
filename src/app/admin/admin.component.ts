import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../Catalogue'
import { UserService } from '../user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  catalogueDeProduitsAModifier: Catalogue;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.catalogueDeProduitsAModifier = new Catalogue();
    if (this.userService.connected == false) {
      this.router.navigateByUrl('sign-in');
    }
  }

}
