import { Component } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { CommonModule } from '@angular/common';
import { ProductI } from '../interfaces/product-i';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent {

  public arrayProductos : ProductI[];

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
