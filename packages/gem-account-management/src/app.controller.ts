import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthenicateService } from './authenticate/Authenicate.service';
import { AuthenticateGuard } from './guard/Authenticate.guard';

@Controller()
@UseGuards(new AuthenticateGuard())

export class Authenicate {
  constructor(private readonly authenicateService: AuthenicateService) { }

  @Get("/token")
  verifyToken(): string {
    return this.authenicateService.getToken();
  }
}
