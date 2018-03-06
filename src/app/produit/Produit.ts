export class Produit{
  public id: number;
  public name: string;
  public imageUrl: string;
  public description: string;
  public price: number;
  
  constructor(id: number, name: string, imageUrl: string, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
<<<<<<< HEAD
    this.price = price;
=======
    this.price = price.toFixed(2) + '$';
>>>>>>> 7ad7df28438853b51d3fac76623404a830e7b0a1
  }
};
