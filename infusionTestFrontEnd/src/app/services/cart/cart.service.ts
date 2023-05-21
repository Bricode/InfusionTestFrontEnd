import { Injectable } from '@angular/core';
import { Cart } from '../../interfaces/cart';
import { Product } from '../../interfaces/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: Product[] = [];
  customerCart: Cart = {products: this.products, productQuantity: []}
  public addedToCart = new Subject();

  addToCart(product: Product) {    
    this.customerCart.products.push(product);
    this.addedToCart.next(0);
  }
  
  getCartProducts() {
    return this.customerCart.products;
  }

  getCartItemCount() {
    return this.customerCart.products.length;
  }

  removeProductFromCart(product: Product) {
    var index = this.customerCart.products.indexOf(product);
    this.customerCart.products.splice(index, 1);
  }
 
  emptyCart() {
    this.customerCart.products = [];
    this.addedToCart.next(0);
    return this.customerCart.products;
  }     
  
  constructor() { }
}
