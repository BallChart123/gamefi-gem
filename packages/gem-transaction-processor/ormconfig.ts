export const config = [
    {
      "name": "default",
      "type": "postgres",
      "host": "localhost",
      "port": process.env.POSTGRESS_PORT,
      "username": process.env.POSTGRESS_USER,
      "password": process.env.POSTGRESS_PASSWORD,
      "database": process.env.POSTGRESS_DB,
      "entities": ["dist/**/*.entity{ .ts,.js}"],
      "synchronize": false,
      "migrations": ["dist/migrations/*{.ts,.js}"],
      "migrationsTableName": "migrations_typeorm",
      "migrationsRun": true
    }
]

export default config;