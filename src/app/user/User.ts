export class User{
  private firstName: string;
  private lastName: string;
  private username: string;
  private password: string
  private email: string;
  private address: string;
  private city: string;
  private country: string;
  
  constructor(firstName: string, lastName: string, username: string, password: string, address: string, city: string, country: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.address = address;
    this.city = city;
    this.country = country;
  }
};