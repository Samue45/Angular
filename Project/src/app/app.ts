import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormProduct } from './components/form-product/form-product';
import { ProductI } from './components/interfaces/product-i';
import { ProductService } from './service/product-service';
import { ListProduct } from './components/list-product/list-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormProduct, ListProduct, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  public arrayProducts: ProductI[];

  constructor(private productoService: ProductService) { 
    this.arrayProducts = this.productoService.getAllProducts();
  }

  public getArrayProducts() : ProductI[]{
    return this.arrayProducts;
  }

  public addProduct(product: ProductI) {
    try {
      // Adding new product using the service
      this.productoService.addProduct(Number(product.id) , product.name, Number(product.price));
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error adding product:', error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  }
  public removeProduct(id: String) {
    try {
      this.productoService.removeProduct(Number(id));
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error removing product:', error.message);
      } else {
        console.error('Unexpected error', error);
      }
    } 
  }

  public updateProduct(id: number, name: string, price: number) {
    try {
      this.productoService.updateProduct(id,name,price);
    }catch(error){
      if(error instanceof Error){
        console.error('Error removing product:', error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  }
}
