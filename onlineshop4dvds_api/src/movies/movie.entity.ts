import { Product } from "src/products/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public lengthInMinutes: number;

    @Column("decimal", {nullable: true})
    public imdbRatings: number;

    @OneToOne(() => Product)
    @JoinColumn()
    public product: Product;
}