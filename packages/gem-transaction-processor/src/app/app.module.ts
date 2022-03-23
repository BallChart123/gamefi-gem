import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from 'module/book/book.module';
import { ConfigModule } from '@nestjs/config';

import { ormOption } from "app/orm.config";
@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(ormOption),
        BookModule
    ],
    exports: [TypeOrmModule]
})
export class AppModule {

}
