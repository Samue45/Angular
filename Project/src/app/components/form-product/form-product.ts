import { Component, EventEmitter, Output } from '@angular/core';
import { ProductI } from '../interfaces/product-i';

@Component({
  selector: 'app-form-product',
  imports: [],
  templateUrl: './form-product.html',
  styleUrl: './form-product.scss'
})
export class FormProduct {

  // Child component need to send data to parent component
  @Output() newProduct = new EventEmitter<ProductI>();

  public addProduct(name:string, price:string){}

}
