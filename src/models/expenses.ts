import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { Users } from "./users";

@Entity()
export class Expenses extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column("varchar")
    cost!: string;

    @Column("varchar")
    type!: string;

    @ManyToOne(() => Users, user => user.expenses)
    user!: Users;

}