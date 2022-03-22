import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './data/entity/models/Book.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Book)
    private book: Repository<Book>,
  ) { }

  async findBook():Promise<Book[]> {
    return this.book.find();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
