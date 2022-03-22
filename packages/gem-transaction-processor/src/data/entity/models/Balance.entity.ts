import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Balance {
    @PrimaryGeneratedColumn("uuid")
    account_id: number;

    @Column('string')
    book

    @Column('uuid')
    transaction_id

    @Column('decimal')
    balance: number;

    @Column('timestamp')
    created_at: Date;


}
