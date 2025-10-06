import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormProduct } from './components/form-product/form-product';
import { ProductI } from './components/interfaces/product-i';
import { ProductService } from './service/product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormProduct],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public newProduct: EventEmitter<ProductI> = new EventEmitter<ProductI>();
  private arrayProducts: ProductI[];

  constructor(private productoService: ProductService) { 
    this.arrayProducts = this.productoService.getAllProducts();
  }

  public getArrayProducts() : ProductI[]{
    return this.arrayProducts;
  }

  public addProduct(id: string, name: string, price: string) {
    try {
      this.productoService.addProduct(Number(id), name, Number(price));
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
