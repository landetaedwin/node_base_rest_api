import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Details {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    address: string;

    @Column()
    phone: string;

    @ManyToOne(type => User, user => user.details)
    @JoinColumn({ name: "userid" })
    user: User;

}