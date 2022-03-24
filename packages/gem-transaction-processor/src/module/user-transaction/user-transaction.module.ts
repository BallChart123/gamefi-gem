import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTransaction } from 'data/entity/models/UserTransaction.entity';
import { UserManagementController } from 'module/user-mangement/user-mangement.controller';
import { UserManagementModule } from 'module/user-mangement/user-mangement.module';
import { UserTransactionController } from './user-transaction.controller';
import { UserTransactionService } from './user-transaction.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserTransaction]),
    ],
    exports: [
        TypeOrmModule,
        UserTransactionService
    ],
    controllers: [UserTransactionController],
    providers: [UserTransactionService],

})
export class UserTransactionModule {

}
