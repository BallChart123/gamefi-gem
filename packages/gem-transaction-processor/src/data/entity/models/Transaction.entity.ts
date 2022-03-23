import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn("uuid")
    transaction_id: number;

    @Column('varchar')
    book: string;

    @Column('uuid')
    journal_id: number;

    @Column('decimal')
    debit: number;

    @Column('decimal')
    credit: number;

    @Column('uuid')
    account_id: string;

    @Column('timestamp')
    timestamp: Date

    @Column('timestamp')
    datetime: Date;

}
