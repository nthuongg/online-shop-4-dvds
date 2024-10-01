import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { CartProduct } from './cart-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartProduct])],
  providers: [CartsService],
  controllers: [CartsController]
})
export class CartsModule {}
