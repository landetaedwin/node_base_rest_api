import { Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Details } from "./details";
import * as bcrypt from "bcryptjs";


@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    isactive: boolean;

    @OneToMany(type => Details, details => details.user)
    details: Details[];

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}