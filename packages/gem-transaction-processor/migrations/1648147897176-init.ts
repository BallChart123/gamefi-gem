import { MigrationInterface, QueryRunner } from "typeorm";

export class init1648147897176 implements MigrationInterface {
    name = 'init1648147897176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_transaction" DROP COLUMN "transaction_id"`);
        await queryRunner.query(`ALTER TABLE "user_transaction" ADD "transaction_id" uuid NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_transaction" DROP COLUMN "transaction_id"`);
        await queryRunner.query(`ALTER TABLE "user_transaction" ADD "transaction_id" character varying NOT NULL`);
    }

}
