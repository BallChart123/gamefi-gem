


import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction.entity";
export enum ITransactionType {
    DEBIT = "debit",
    CREDIT = "credit",
}
@Entity()
export class UserTransaction {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('varchar')
    user_id: string;

    @Column('timestamp')
    created_at: Date

    @Column('uuid')
    @ManyToOne((type) => Transaction, (transaction) => transaction.id)
    transaction_id: string

    @Column({ type: 'enum', enum: ITransactionType })
    transaction_type: ITransactionType

    @Column("bigint")
    amount: number

}
