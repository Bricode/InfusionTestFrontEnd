import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  cart: Cart = {} as Cart;
 
  products = this.cartService.getCartProducts();

  constructor(
    private cartService: CartService
  ) {
    this.cart.products = this.cartService.getCartProducts();
    console.log(this.products);
  }
}
