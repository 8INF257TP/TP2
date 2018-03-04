import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'catalogue', component: CatalogueComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    PanierComponent,
    CatalogueComponent,
    UserComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
