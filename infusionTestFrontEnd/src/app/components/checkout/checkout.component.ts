import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { FormBuilder } from '@angular/forms'
import { Order } from 'src/app/interfaces/order';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent {
  order: Order = {} as Order; 

  checkoutForm = this.formBuilder.group({    
    firstName: '',
    lastName: '',
    email: ''
  })
  
  constructor(private cartService: CartService, private formBuilder: FormBuilder, private orderService: OrderService, private router: Router) {
    this.order.cart = cartService.getCartProducts();
    
  }

  onSubmit() {
    this.orderService.getAllOrders().subscribe((data: Order[]) => {
      if(data.length != 0) {
        this.order.id = data.length + 1;
      } else {
        this.order.id = 0; 
      }      
    })
    this.order.firstName = this.checkoutForm.value.firstName as string;
    this.order.lastName = this.checkoutForm.value.lastName as string;
    this.order.email = this.checkoutForm.value.email as string;

    this.orderService.createOrder(this.order).subscribe(res => {
      alert("Thank you for your order");
      this.cartService.emptyCart();
      
      this.router.navigateByUrl('/products');
    });
  }
}
