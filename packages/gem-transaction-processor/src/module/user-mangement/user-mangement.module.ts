import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagement } from 'data/entity/models/UserManagement.entity';
import { UserManagementController } from './user-mangement.controller';
import { UserManagementService } from './user-mangement.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserManagement])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [UserManagementController],
    providers: [UserManagementService],

})
export class UserManagementModule {

}
