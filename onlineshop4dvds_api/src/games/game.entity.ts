import { Product } from "src/products/product.entity";
import { ConsoleType } from "src/utils/console-type";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({nullable: true})
    public consoleType: ConsoleType;

    @OneToOne(() => Product)
    @JoinColumn()
    public product: Product;
}