import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { Repository } from 'typeorm';
import { CartProduct } from './cart-product.entity';
import { Product } from 'src/products/product.entity';

@Injectable()
export class CartsService {

    private readonly defaultQuantity = 1;

    public constructor(@InjectRepository(Cart) private cartRepo: Repository<Cart>, @InjectRepository(CartProduct) private cartProductRepo: Repository<CartProduct>) {}

    public async findById(cartId: number): Promise<Cart | null> {
        return await this.cartRepo.findOne({
            where: {id: cartId},
            relations: {cartProducts: {product: true}},
            order: {cartProducts: {id: "ASC"}},
        });
    }

    public async getCartItems(cartId: number): Promise<CartProduct[]> {
        return await this.cartProductRepo.findBy({cart: {id: cartId}});
    }

    public async create({productId}: {productId: number}): Promise<Cart> {
        const cartCreated = await this.cartRepo.save(new Cart());
        const cartProductToCreate = new CartProduct();
        cartProductToCreate.cart = {id: cartCreated.id} as Cart;
        cartProductToCreate.product = {id: productId} as Product;
        cartProductToCreate.quantity = this.defaultQuantity;
        await this.cartProductRepo.save(cartProductToCreate);
        return await this.findById(cartCreated.id);
    }

    public async update({cartId, productId, quantity}: {cartId: number, productId: number, quantity: number}): Promise<Cart> {
        const item = await this.cartProductRepo.findOneBy({
            cart: {id: cartId},
            product: {id: productId},
        });
        if (!item) {
            const item = new CartProduct();
            item.cart = {id: cartId} as Cart;
            item.product = {id: productId} as Product;
            item.quantity = this.defaultQuantity;
            await this.cartProductRepo.save(item);
        } else {
            if (quantity > 0) await this.cartProductRepo.update(item.id, {quantity});
            else await this.cartProductRepo.delete(item.id);
        }
        return await this.findById(cartId);
    }
}
