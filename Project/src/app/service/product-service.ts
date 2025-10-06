import { Injectable } from '@angular/core';
import { ProductI } from '../components/interfaces/product-i';

//This code allow me to create a Sigleton pattern
//----
@Injectable({
  providedIn: 'root'
})
//---
export class ProductService {

  private arrayProduct: ProductI[];

  constructor() {
    this.arrayProduct = [];
    this.fillArrayProduct();
  }

  private fillArrayProduct(){
    this.arrayProduct = [ {id: 0, name:"Eggs", price: 2.30},
                          {id: 1, name:"Milk", price: 1.20},
                          {id: 2, name:"Bread", price: 1.00},
                          {id: 3, name:"Butter", price: 1.50},
                          {id: 4, name:"Cheese", price: 2.50},
                          {id: 5, name:"Chicken", price: 5.00},
                          {id: 6, name:"Beef", price: 7.00},
                          {id: 7, name:"Pork", price: 6.00},
                          {id: 8, name:"Fish", price: 8.00},
                          {id: 9, name:"Rice", price: 1.80} ];
  }

  // I must to create a method CRUD to manage the products

  //READ
  public getAllProducts() : ProductI[]{
    return this.arrayProduct;
  }

  //CREATE
  public addProduct(id: number, name: string, price: number) : void{
    // 1º Check if exist a product with the same id
    // 2º Manage cases
      // Yes -> Show message
      // Not -> Add product
    if(this.existProduct(id)) {
      throw new Error(`Already exist a product with id ${id}`);
    }

    this.arrayProduct.push({id, name, price});
    console.log(`Product ${name} added successfully`);  

    // Finally, we sort the products array in ascending order
    this.arrayProduct.sort((a,b) => a.id - b.id);   

  }

  //DELETE
  public removeProduct(id: number) : void{
    // 1º Check if exist a product with the same id
    // 2º Manage cases
      // Yes -> Delete produvt
      // Not -> Show message
    if(this.existProduct(id)) {
      this.arrayProduct = this.arrayProduct.filter(product => product.id !== id);
      console.log(`Product with id ${id} removed successfully`);  
      
      // Finally, we sort the products array in ascending order
      this.arrayProduct.sort((a,b) => a.id - b.id);   
      return;
    }

    throw new Error(`Not exist a product with id ${id}`);

  }

  //UPDATE
  public updateProduct(id: number, name: string, price: number){
    // 1º Check if exist a product with the same id
    // 2º Manage cases
      // Yes -> Update product
      // Not -> Show message
    if(this.existProduct(id)){
      // Creating a new product 
      let newProduct : ProductI =  {id,name,price};
      console.log(`New Product = id : ${id}, name: ${name}, price: ${price}`);
      console.log(`Old Product = id : ${this.arrayProduct[id].id}, name: ${this.arrayProduct[id].name}, price: ${this.arrayProduct[id].price}`);
      
      // Changing new product to old product
      this.arrayProduct[id] = newProduct;

      // Get out of method
      console.log(`Product with ${id} updated successfully`)
       console.log(`New Product = id : ${this.arrayProduct[id].id}, name: ${this.arrayProduct[id].name}, price: ${this.arrayProduct[id].price}`);
      return;
    }
  }

  // AUXILIAR METHODS
  private existProduct( id : number): boolean{
    return this.arrayProduct.some(product => product.id === id);
  }
  
}
