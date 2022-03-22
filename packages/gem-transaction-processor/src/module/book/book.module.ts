import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/data/entity/models/Book.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [Book],
        }),
    ],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule {

}
