import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'data/entity/models/Book.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [BookController],
    providers: [BookService],

})
export class BookModule {

}
