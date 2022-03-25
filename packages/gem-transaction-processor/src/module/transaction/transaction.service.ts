import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'data/entity/models/Transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private transaction: Repository<Transaction>,

    ) { }
    async createTransaction(transaction: Transaction): Promise<Transaction> {
        return this.transaction.save(transaction);
    }
    async findTransactionById(id: string): Promise<Transaction> {
        return this.transaction.findOne({ where: { id } })
    }
    async findTransaction(): Promise<Transaction[]> {
        return this.transaction.find()
    }

    async deleteTransaction(id: string) {
        const transaction = await this.transaction.findOne({ where: { id } })
        return await this.transaction.delete(transaction)
    }

}
