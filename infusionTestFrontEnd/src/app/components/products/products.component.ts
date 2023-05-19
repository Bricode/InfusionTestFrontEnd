import { Component, inject } from '@angular/core';
import { Product } from '../../services/product/product';
import { ProductsService } from '../../services/product/products.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserAuthenticatorService } from 'src/app/services/auth/user-authenticator.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  productsService: ProductsService = inject(ProductsService);
  productsList: Product[] = [];
  adminUser = this.userAuth.isAdmin();
  constructor(private cartService: CartService, private userAuth: UserAuthenticatorService, private router: Router) {
    this.productsService.getAllProducts().subscribe((data: Product[]) => {
      this.productsList = data;
      console.log(data);
    })    
  }  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getCartProducts());
  }
  editProduct(productId: number) {
    this.router.navigateByUrl('/editProduct/' + productId);
  }
  
}
