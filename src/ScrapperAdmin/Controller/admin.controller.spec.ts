import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AppService } from '../Service/app.service';

describe('AppController', () => {
  let appController: AdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AppService],
    }).compile();

    appController = app.get<AdminController>(AdminController);
  });

  describe('root', () => {
    it('should return "example.com"', () => {
      expect(appController.getConfig().url).toMatch('example.com');
    });
  });
});
