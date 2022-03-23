import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Balance {
    @PrimaryGeneratedColumn("uuid")
    account_id: string;

    @Column('varchar')
    book: string;

    @Column('uuid')
    transaction_id: string;

    @Column('decimal')
    balance: number;

    @Column('timestamp')
    created_at: Date;


}
