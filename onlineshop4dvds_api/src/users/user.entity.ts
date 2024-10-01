import { Review } from "src/reviews/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 64})
    public fullName: string;

    @Column()
    public email: string;

    @Column()
    public normalizedEmail: string;
    
    @Column()
    public passwordHash: string;

    @Column("boolean", {default: false})
    public isEmailActive: boolean = false;

    @Column({nullable: true})
    public emailToken: string;

    @Column("boolean", {default: false})
    public isAdmin: boolean = false;

    @OneToMany(() => Review, (review) => review.user)
    public reviews: Review[];
}