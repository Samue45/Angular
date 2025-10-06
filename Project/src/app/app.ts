import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product-component/product-component';
import { ProductI } from './components/interfaces/product-i';
import { ProductService } from './service/product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   public arrayProductos : ProductI[];


  @Output() product = new EventEmitter<ProductI>();

  constructor(private productoService: ProductService) { 
    this.arrayProductos = this.productoService.getAllProducts();
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
