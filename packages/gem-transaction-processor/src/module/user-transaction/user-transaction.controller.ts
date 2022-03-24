
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UserTransactionService } from './user-transaction.service';

@Controller('/v1/user/transaction')
export class UserTransactionController {
    constructor(private readonly transactionService: UserTransactionService) { }


}
