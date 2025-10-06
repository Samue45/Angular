import { Component, EventEmitter, Output } from '@angular/core';
import { ProductI } from '../interfaces/product-i';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  imports: [FormsModule],
  templateUrl: './form-product.html',
  styleUrl: './form-product.scss'
})
export class FormProduct {

  // Object product to send to parent component
  newProductObject: ProductI = {id: 0, name: "", price: 0};

  // Child component need to send data to parent component
  @Output() newProduct = new EventEmitter<ProductI>();

  public sendProduct(){
    this.newProduct.emit(this.newProductObject);
  }

}
