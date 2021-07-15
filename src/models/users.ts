import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import {Expenses} from "./expenses";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column("varchar")
    name!: string;

    @Column("varchar")
    login!: string;

    @Column("varchar")
    password!: string;

    /*@Column("varchar")
    name!: string;*/

    @OneToMany(() => Expenses, expenses => expenses.user)
    expenses!: Expenses[];

}