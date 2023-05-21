import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order) {    
    console.log("test2")
    var url = 'http://localhost:3000/orders';
    return this.http.post<Order>(url, order);     
  }

  getAllOrders() {
    var url = 'http://localhost:3000/orders';
    return this.http.get<Order[]>(url);
  }

  getSingleOrder(orderNumber: Number) {
    var url = 'http://localhost:3000/orders/' + orderNumber;
    return this.http.get<Order>(url);
  }

  
}
