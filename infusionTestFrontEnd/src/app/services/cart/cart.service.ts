import { Injectable } from '@angular/core';
import { Cart } from '../../cart';
import { Product } from '../product/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  customerCart: Cart = {customerId: 0, products: this.products}

  addToCart(product: Product) {
    this.customerCart.products.push(product);
  }

  getCartProducts() {
    return this.customerCart.products;
  }
  
  removeProductFromCart(product: Product) {
    var index = this.customerCart.products.indexOf(product);
    this.customerCart.products.splice(index, 1);
  }

  setCartCustomer(customerId: number) {
    this.customerCart.customerId = customerId;
  }
  
  emptyCart() {
    this.customerCart.products = [];
    return this.customerCart.products;
  }
  constructor() { }
}
