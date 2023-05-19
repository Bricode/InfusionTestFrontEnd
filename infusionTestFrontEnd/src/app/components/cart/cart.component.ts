import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  products = this.cartService.getCartProducts();
  
  constructor(
    private cartService: CartService
  ) {
    console.log(this.products);
  }
}
