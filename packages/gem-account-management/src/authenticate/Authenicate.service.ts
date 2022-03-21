import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenicateService {
  getToken(): string {
    return 'Hello World!';
  }
}
