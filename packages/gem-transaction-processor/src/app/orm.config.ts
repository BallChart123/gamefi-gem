import * as dotenv from "dotenv";
dotenv.config()


import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const ormOption = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [__dirname + '/../data/entity/**/*.entity{.ts,.js}'],
    synchronize: true
}

export const ormConfig = {
    ...ormOption,
    migrationsTableName: "migrations",
    migrations: ["migrations/*.ts"],
    cli: {
        "migrationsDir": "/migrations"
    }
}

export const dataSource = new DataSource(
    ormConfig as unknown as PostgresConnectionOptions
)
