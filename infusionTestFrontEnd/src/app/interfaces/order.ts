import { Product } from "./product";

export interface Order {
    id: number,
    cart: Product[],
    userId: number,
    firstName: string,
    lastName: string,
    email: string
}