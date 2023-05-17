import { Component } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  cart: Cart = {
    products: [{
      sku: 1,
      name: 'test',
      description: 'test Description',
      price: 19.99
    }]
  }
}
