import { Test, TestingModule } from '@nestjs/testing';
import { Authenicate } from './app.controller';
import { AuthenicateService } from './authenticate/Authenicate.service';

describe('authenicate', () => {
  let authenicate: Authenicate;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Authenicate],
      providers: [AuthenicateService],
    }).compile();

    authenicate = app.get<Authenicate>(Authenicate);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authenicate.verifyToken()).toBe('Hello World!');
    });
  });
});
