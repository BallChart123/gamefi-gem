import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Book } from 'src/data/entity/models/Book.entity';
import { CreateBook } from 'src/data/entity/models/dto/createBookDto';
import { BookService } from './book.service';

@Controller('/v1/books')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createAlbum(@Body() createBook: CreateBook): Promise<Book> {
        const book = new Book();
        book.name = createBook.name;
        return await this.bookService.createOrUpdateBook(book);
    }

    @Get()
    async findBook(): Promise<Book[]> {
        return await this.bookService.findBook();
    }
    @Get(':id')
    async findAlbum(@Param('name') name: string): Promise<Book> {
        return await this.bookService.findOneBook(name);
    }

    @Put(':name')
    async updateAlbum(
        @Param('name') name: string,
        @Body() createBook: CreateBook,
    ): Promise<Book> {
        const book = await this.bookService.findOneBook(name);
        book.name = createBook.name;
        return await this.bookService.createOrUpdateBook(book);
    }

    @Delete(':name')
    async deleteAlbum(@Param('name') name: string): Promise<any> {
        await this.bookService.deleteBook(name);
        return { success: true };
    }

}
