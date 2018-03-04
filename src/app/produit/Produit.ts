export class Produit{
  public id: number;
  public name: string;
  public imageUrl: string;
  public description: string;
  public price: number;
  
  constructor() {
  this.id = 1;
    this.name = "name";
    this.imageUrl = "../../assets/img/img1.jpeg";
    this.description = "description";
    this.price = 12;
  }
};
