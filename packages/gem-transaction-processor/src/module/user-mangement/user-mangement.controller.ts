import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateUserManagementRequest } from 'data/entity/models/request/createUserManagementRequest';
import { UserManagement } from 'data/entity/models/UserManagement.entity';
// import { CreateUserMangementRequest } from 'data/entity/models/request/CreateUserMangementRequest';
import { UserManagementService } from './user-mangement.service';

@Controller('/v1/user')
export class UserManagementController {
    constructor(private readonly userManagementService: UserManagementService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() createUserMangement: CreateUserManagementRequest): Promise<UserManagement> {
        const user = new UserManagement();
        user.firstname = createUserMangement.firstname;
        user.lastname = createUserMangement.lastname;
        user.email = createUserMangement.email;
        user.role = createUserMangement.role;
        user.created_at = new Date()

        return await this.userManagementService.createUser(user);
    }
    @Get()
    @HttpCode(200)
    async getUser(): Promise<UserManagement[]> {
        return await this.userManagementService.findUser();
    }
    @Get("/balance/:id")
    @HttpCode(200)
    async balance(@Param() id: string): Promise<UserManagement> {
        const balance = await this.userManagementService.findBalanceByUserId(id)
        return;
        // return await this.userManagementService.findUser();
    }
    // @Post("verifyBalance")
    // @HttpCode(200)
    // async verifyBalance(@Body() createUserMangement: CreateUserManagementRequest): Promise<UserManagement> {


    //     // return await this.userManagementService.createUser(user);
    // }
}
