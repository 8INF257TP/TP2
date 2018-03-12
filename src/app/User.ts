import {Panier} from './Panier';

export class User{
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string
  public email: string;
  public address: string;
  public city: string;
  public country: string;
  public panier: Panier;
  
  constructor(){
    this.panier = new Panier();
  }
};