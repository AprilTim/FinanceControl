import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn} from "typeorm";
import {UserProfile} from "./usersProfile";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column("text")
    name!: string;

    @Column("varchar")
    age!: string;


    @OneToOne(type => UserProfile)
    @JoinColumn()
    usersProfile!: UserProfile;
}