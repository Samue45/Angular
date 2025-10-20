import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductI } from '../interfaces/product-i';

@Component({
  selector: 'app-list-product',
  imports: [CommonModule],
  templateUrl: './list-product.html',
  styleUrl: './list-product.scss'
})
export class ListProduct {

  @Input() product: ProductI;
  @Output() idProduct= new EventEmitter<Number>();

  constructor(public elementRef: ElementRef) {
    this.product = {id: 0, name: "", price: 0};
  }

  public sendIdProduct(id:number){
    this.idProduct.emit(id);
  }



}
