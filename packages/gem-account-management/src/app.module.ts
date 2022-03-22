import { Module } from '@nestjs/common';
import { Authenicate } from './app.controller';
import { AuthenicateService } from './authenticate/Authenicate.service';

@Module({
  imports: [],
  controllers: [Authenicate],
  providers: [AuthenicateService],
})
export class AppModule { }
