import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1648065067786 implements MigrationInterface {
    name = 'initial1648065067786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "balance" ("account_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "book" character varying NOT NULL, "transaction_id" uuid NOT NULL, "balance" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_08a76919ccd3887911dd30b9116" PRIMARY KEY ("account_id"))`);
        await queryRunner.query(`CREATE TABLE "book" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "journal" ("journal_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "book" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL, "datetime" TIMESTAMP NOT NULL, CONSTRAINT "PK_4d27dd512dc66b55d047c0073a2" PRIMARY KEY ("journal_id"))`);
        await queryRunner.query(`CREATE TABLE "transaction" ("transaction_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "book" character varying NOT NULL, "journal_id" uuid NOT NULL, "debit" numeric NOT NULL, "credit" numeric NOT NULL, "account_id" uuid NOT NULL, "timestamp" TIMESTAMP NOT NULL, "datetime" TIMESTAMP NOT NULL, CONSTRAINT "PK_6e02e5a0a6a7400e1c944d1e946" PRIMARY KEY ("transaction_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TABLE "journal"`);
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`DROP TABLE "balance"`);
    }

}
