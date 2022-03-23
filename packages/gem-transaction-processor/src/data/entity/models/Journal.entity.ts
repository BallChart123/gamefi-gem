import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Journal {
    @PrimaryGeneratedColumn("uuid")
    journal_id: string;

    @Column('varchar')
    book: string;

    @Column('timestamp')
    timestamp: Date

    @Column('timestamp')
    datetime: Date;

}
