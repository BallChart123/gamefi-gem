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

    async findOneBook(id: string): Promise<Book> {
        return await this.book.findOne({ where: { id } })
    }
    async findBook(): Promise<Book[]> {
        return await this.book.find();
    }
    async deleteBook(id: string) {
        const book = await this.book.findOne({ where: { id } })

        return await this.book.delete(book)
    }

}
