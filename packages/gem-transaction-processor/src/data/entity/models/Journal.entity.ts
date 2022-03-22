import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Journal {
    @PrimaryGeneratedColumn("uuid")
    journal_id: number;

    @Column('string')
    book

    @Column('timestamp')
    timestamp: Date

    @Column('datetime')
    datetime: Date;

}
