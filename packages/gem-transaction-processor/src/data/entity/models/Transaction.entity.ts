import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('varchar')
    user_id: string;

    @Column('timestamp')
    timestamp: Date

    @OneToMany((type) => Transaction, (transaction) => transaction.id)
    transaction_id: string;

}
