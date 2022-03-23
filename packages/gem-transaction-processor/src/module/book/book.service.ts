import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'data/entity/models/Book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private book: Repository<Book>,
    ) { }
    async createOrUpdateBook(book: Book): Promise<Book> {
        return await this.book.save(book);
    }

    async findOneBook(name: string): Promise<Book> {
        return await this.book.findOne({ where: { name } })
    }
    async findBook(): Promise<Book[]> {
        return await this.book.find();
    }
    async deleteBook(name: string): Promise<Book> {
        return await this.book.remove(Book, { data: name })
    }

}
