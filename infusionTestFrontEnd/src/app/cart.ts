import { Product } from './services/product/product';

export interface Cart {
    customerId: number,
    products: Product[]    
}