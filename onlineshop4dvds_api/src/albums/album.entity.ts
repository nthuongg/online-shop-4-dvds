import { Artist } from "../artists/artist.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "src/products/product.entity";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({nullable: true})
    public lengthInSeconds: number;

    @ManyToOne(() => Artist, (artist) => artist.albums)
    public artist: Artist;

    @OneToOne(() => Product)
    @JoinColumn()
    public product: Product;
}