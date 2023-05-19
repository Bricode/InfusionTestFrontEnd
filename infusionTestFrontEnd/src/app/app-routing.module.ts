import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'products', component: ProductsComponent,canActivate:[AuthGuard]},
  {path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
  {path: 'orders', component: OrdersComponent,canActivate:[AuthGuard]},
  {path: 'checkout', component: CheckoutComponent,canActivate:[AuthGuard]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
