import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [{
    sku: 1,
    name: 'test',
    description: 'test Description',
    price: 19.99
  },{
    sku: 2,
    name: 'test2',
    description: 'test Description2',
    price: 20.99
  }]
}
