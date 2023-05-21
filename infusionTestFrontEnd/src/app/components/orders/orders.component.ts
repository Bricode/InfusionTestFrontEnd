import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orderList: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) {
    this.orderService.getAllOrders().subscribe((data: Order[]) => {
      this.orderList = data;
    })
  }
  
  viewOrder(orderId: number) {
    this.router.navigateByUrl('/orderDetails/' + orderId);
  }
}
