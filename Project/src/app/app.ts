import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormProduct } from './components/form-product/form-product';
import { ProductI } from './components/interfaces/product-i';
import { ProductService } from './service/product-service';
import { ListProduct } from './components/list-product/list-product';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormProduct, ListProduct, CommonModule,Header],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  public arrayProducts: ProductI[];
  @ViewChildren(ListProduct) itemsProduct!: QueryList<ListProduct>;


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
      // Adding new product to arrayProducts
      this.arrayProducts.push(product);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error adding product:', error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  }
  public removeProduct(id: Number) {
    try {
      this.productoService.removeProduct(Number(id));
      this.deleteProductList(id);
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

  // Auxiliar method
  public deleteProductList(id: Number) : void{
    this.arrayProducts = this.arrayProducts.filter((p) => p.id !== id);
  }

  public changeStyleItems(): void {
   this.itemsProduct.forEach(item => {
    // Buscar el div con clase product-card dentro del hijo
    const card = item.elementRef.nativeElement.querySelector('.product-card') as HTMLElement;
    if (!card) return;

    // Alternar color
    const currentColor = card.style.backgroundColor;
    card.style.backgroundColor = currentColor === 'lightgreen' ? 'white' : 'lightgreen';
    });
  }
}


