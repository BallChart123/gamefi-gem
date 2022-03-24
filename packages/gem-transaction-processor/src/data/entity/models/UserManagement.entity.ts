
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserManagement {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('varchar')
    username: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    firstname: string;

    @Column('varchar')
    lastname: string;

    @Column('varchar')
    role: string;

    @Column('timestamp')
    created_at: Date

}
