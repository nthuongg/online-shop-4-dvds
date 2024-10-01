import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";
import { Product } from "src/products/product.entity";

@Entity()
export class CartProduct {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Cart, (cart) => cart.cartProducts)
    public cart: Cart;

    @ManyToOne(() => Product, (product) => product.cartProducts)
    public product: Product;

    @Column({default: 1})
    public quantity: number;
}