import { Component, inject } from '@angular/core';
import { Product } from '../../services/product/product';
import { ProductsService } from '../../services/product/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  productsService: ProductsService = inject(ProductsService);
  productsList: Product[] = [];

  constructor() {
    this.productsService.getAllProducts().subscribe((data: Product[]) => {
      this.productsList = data;
      console.log(data);
    })    
  }  
}
