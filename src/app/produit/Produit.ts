export class Produit{
  public id: number;
  public name: string;
  public imageUrl: string;
  public description: string;
  public price: string;
  
  constructor(id: number, name: string, imageUrl: string, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price.toFixed(2) + '$';
  }
};
