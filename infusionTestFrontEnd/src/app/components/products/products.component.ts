import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/product/products.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserAuthenticatorService } from 'src/app/services/auth/user-authenticator.service';
import { Output, EventEmitter } from '@angular/core';
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
  selectedProduct: Product = {} as Product;
  showAlert: Boolean = false;
  @Output() productAddedToCart = new EventEmitter<number>();

  constructor(private cartService: CartService, private userAuth: UserAuthenticatorService, private router: Router) {
    this.productsService.getAllProducts().subscribe((data: Product[]) => {
      this.productsList = data;
      console.log(data);
    })    
  }  
  addToCart(product: Product) {
    this.productAddedToCart.emit();
    this.cartService.addToCart(product);
    this.selectedProduct = product;
    this.showAlert = true;
    setTimeout( () => {
      this.showAlert = false;
    }, 2000);
  }
  editProduct(productId: number) {
    this.router.navigateByUrl('/editProduct/' + productId);
  }
  
}
