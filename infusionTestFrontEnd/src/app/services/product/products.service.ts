import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient, private router: Router) { }
  

  getAllProducts() {
    var url = 'http://localhost:3000/products';
    return this.http.get<Product[]>(url);
  }   

  getSingleProduct(productId: number) {
    var url = 'http://localhost:3000/products/' + productId;
    return this.http.get<Product>(url);
  }

  saveProduct(product: Product) {
    console.log("test2")
    var url = 'http://localhost:3000/products/' + product.id;
    this.http.put<Product>(url, product).subscribe();    
  }
}
