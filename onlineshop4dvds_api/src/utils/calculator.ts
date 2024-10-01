import { CartProduct } from "src/carts/cart-product.entity";

export const calculateSubtotal = (cartProducts: CartProduct[]): number => parseFloat(cartProducts.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0).toFixed(2)); 

export const calculateTotal = (subtotal: number, discount: number): number => parseFloat((subtotal - discount).toFixed(2));