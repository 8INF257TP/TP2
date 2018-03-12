import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ProduitService } from './produit.service';
import { UserService } from './user.service';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: 'catalogue', component: CatalogueComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'home', component: HomeComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'produit-detail', component: ProduitDetailComponent},
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    PanierComponent,
    CatalogueComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    ProduitDetailComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: false }),
    NgxPaginationModule
  ],
  exports: [ RouterModule ],
  providers: [ProduitService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
