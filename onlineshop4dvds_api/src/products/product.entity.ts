import { CartProduct } from "src/carts/cart-product.entity";
import { Category } from "src/categories/category.entity";
import { Image } from "src/images/image.entity";
import { Review } from "src/reviews/review.entity";
import { GenreType } from "src/utils/genre-type";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 256})
    public title: string;

    @Column()
    public yearReleased: number;

    @Column("decimal")
    public price: number;

    @Column()
    public thumbnailUrl: string;

    @Column()
    public description: string;

    @Column({default: 200})
    public stock: number;

    @Column()
    public genreType: GenreType;

    @ManyToMany(() => Category)
    @JoinTable()
    public genres: Category[];

    @OneToMany(() => Review, (review) => review.product)
    public reviews: Review[];

    @OneToMany(() => Image, (image) => image.product)
    public images: Image[];

    @OneToMany(() => CartProduct, (cartProduct) => cartProduct.product)
    public cartProducts: CartProduct[];
}