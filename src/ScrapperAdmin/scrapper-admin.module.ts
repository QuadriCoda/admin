import { Module } from '@nestjs/common';
import { AdminController } from './Controller/admin.controller';

@Module({
  controllers: [AdminController],
  // If you have services, you would include them in the providers array
  // providers: [ScrapperService],
})
export class ScrapperAdminModule {}

