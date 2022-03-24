import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserManagement } from 'data/entity/models/UserManagement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserManagementService {
    constructor(
        @InjectRepository(UserManagement)
        private userManagement: Repository<UserManagement>,
    ) { }
    async createUser(user: UserManagement): Promise<UserManagement> {
        return await this.userManagement.save(user);
    }
    async findUserById(id: string): Promise<UserManagement> {
        return await this.userManagement.findOne({ where: { id } })
    }
    async findUser(): Promise<UserManagement[]> {
        return await this.userManagement.find();
    }
    async deleteUser(id: string) {
        const user = await this.userManagement.findOne({ where: { id } })
        return await this.userManagement.delete(user)
    }
    async findBalanceByUserId(userId: string) {
        const result = await this.userManagement
            .createQueryBuilder('user_management')
            .leftJoinAndSelect('transaction.user_id', 'username')
            .where('user_management.id = :id', { userId })

        console.log(result);

        return result;

    }
}
