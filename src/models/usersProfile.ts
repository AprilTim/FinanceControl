import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn} from "typeorm";
import { Users } from "./users";

@Entity()
export class UserProfile extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column("varchar")
    firstName!: string;

    @Column("varchar")
    lastName!: string;

    @OneToOne(type => Users, userProfile => userProfile.usersProfile)
    users!: Users;
}