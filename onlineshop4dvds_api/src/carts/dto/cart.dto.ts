import { CartItemDto } from "./cart-item.dto";

export interface CartDto {
    id: number;
    items: CartItemDto[];
    subtotal: number;
    discount: number;
    total: number;
}