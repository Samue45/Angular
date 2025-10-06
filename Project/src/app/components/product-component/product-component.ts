import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() arrayProductos: ProductI[] = [];
  @Output() product = new EventEmitter<ProductI>();



}
