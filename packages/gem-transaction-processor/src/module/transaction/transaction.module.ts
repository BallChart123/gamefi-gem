import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'data/entity/models/Transaction.entity';
import { UserManagement } from 'data/entity/models/UserManagement.entity';
import { UserManagementModule } from 'module/user-mangement/user-mangement.module';
import { UserTransactionModule } from 'module/user-transaction/user-transaction.module';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
@Module({
    imports: [
        TypeOrmModule.forFeature([Transaction]),
        UserManagementModule,
        UserTransactionModule
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [TransactionController],
    providers: [TransactionService],

})
export class TransactionModule {

}
