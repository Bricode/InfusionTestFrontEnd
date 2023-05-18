import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent {
  productsService: ProductsService = inject(ProductsService);
  productsList: Product[] = [];

  constructor() {
    this.productsService.getAllProducts().then((productsList: Product[])=> {
      this.productsList = productsList;
      console.log(this.productsList)
    })    
  }  
}
