import { Album } from "../albums/album.entity";
import { Category } from "../categories/category.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 64})
    fullName: string;

    @Column("date")
    dob: Date;

    @Column({length: 64})
    nationality: string;

    @Column({nullable: true})
    avatar: string;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];

    @OneToMany(() => Album, (album) => album.artist, {onDelete: "CASCADE"})
    albums: Album[];
}