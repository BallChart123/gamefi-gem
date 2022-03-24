
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UserManagement } from 'data/entity/models/UserManagement.entity';
import { Transaction } from 'data/entity/models/Transaction.entity';
import { TransactionService } from './transaction.service';
import { UserTransactionService } from 'module/user-transaction/user-transaction.service';
import { ITransactionType, UserTransaction } from 'data/entity/models/UserTransaction.entity';
import { CreateTransferRequest } from 'data/entity/models/request/createTransferRequest';
@Controller('/v1/transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService,
        private readonly userTransactionService: UserTransactionService) { }
    @Post('/transfer')
    async transfer(
        @Body() createTransferRequest: CreateTransferRequest
    ): Promise<Transaction> {
        const transaction = new Transaction();
        transaction.user_id = createTransferRequest.user_from;
        transaction.timestamp = new Date();
        const resultTx = await this.transactionService.createTransaction(transaction);

        const userTxCredit = new UserTransaction();
        userTxCredit.amount = createTransferRequest.amount;
        userTxCredit.user_id = createTransferRequest.user_from;
        userTxCredit.transaction_type = ITransactionType.CREDIT;
        userTxCredit.created_at = new Date();
        userTxCredit.transaction_id = resultTx.id;
        const resultCrebit = await this.userTransactionService.createUserTransaction(userTxCredit);

        const userTxDebit = new UserTransaction();
        userTxDebit.amount = createTransferRequest.amount;
        userTxDebit.user_id = createTransferRequest.user_to;
        userTxDebit.transaction_type = ITransactionType.DEBIT;
        userTxDebit.created_at = new Date();
        userTxDebit.transaction_id = resultTx.id;
        const resultDebit = await this.userTransactionService.createUserTransaction(userTxDebit);

        return new Promise((resolve, reject) => {
            resolve(resultTx)
        });
    }

    @Get("/balance/:userId")
    @HttpCode(200)
    async getTransactionByUserId(userId :string)  {
        return await this.transactionService.findTransaction

    }
}