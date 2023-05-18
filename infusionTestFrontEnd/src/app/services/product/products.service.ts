import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/products';

  getAllProducts() {
    return this.http.get<Product[]>(this.url);
  }   
}
