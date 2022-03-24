import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagementModule } from 'module/user-mangement/user-mangement.module';
import { ConfigModule } from '@nestjs/config';
import { ormOption } from "app/orm.config";
import { TransactionModule } from 'module/transaction/transaction.module';
import { UserTransactionModule } from 'module/user-transaction/user-transaction.module';
@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(ormOption),
        UserManagementModule,
        TransactionModule,
        UserTransactionModule
    ],
    exports: [TypeOrmModule]
})
export class AppModule {

}
