import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  selectedId: number = Number(this.route.snapshot.paramMap.get('id'));
  order: Order = {} as Order;
  displayForm: boolean = false;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {
    this.orderService.getSingleOrder(this.selectedId).subscribe((data: Order) => {
      this.order = data;
      this.displayForm = true;
    })
  }
}
