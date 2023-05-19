import { Component, inject } from '@angular/core';
import { Product } from '../../services/product/product';
import { ProductsService } from '../../services/product/products.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  productsService: ProductsService = inject(ProductsService);
  productsList: Product[] = [];

  constructor(private cartService: CartService) {
    this.productsService.getAllProducts().subscribe((data: Product[]) => {
      this.productsList = data;
      console.log(data);
    })    
  }  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getCartProducts());
  }
}
