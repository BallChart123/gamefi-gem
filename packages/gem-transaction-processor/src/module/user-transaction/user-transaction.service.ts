import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTransaction } from 'data/entity/models/UserTransaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserTransactionService {
    constructor(
        @InjectRepository(UserTransaction)
        private userTransaction: Repository<UserTransaction>,
    ) { }
    async createUserTransaction(user: UserTransaction): Promise<UserTransaction> {
        return await this.userTransaction.save(user);
    }
    async findUserTransactionById(id: string): Promise<UserTransaction> {
        return await this.userTransaction.findOne({ where: { id } })
    }
    async findUserTransaction(): Promise<UserTransaction[]> {
        return await this.userTransaction.find();
    }
    async deleteUserTransaction(id: string) {
        const userTransaction = await this.userTransaction.findOne({ where: { id } })
        return await this.userTransaction.delete(userTransaction)
    }

}
