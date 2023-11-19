
import { Module } from '@nestjs/common';
import { ScrapperAdminModule } from '../ScrapperAdmin/scrapper-admin.module';
import { UserApiModule } from '../UserApi/user-api.module';
import { ScrapperModule } from '../Scrapper/scrapper.module';

@Module({
  imports: [
    ScrapperAdminModule,
    UserApiModule,
    ScrapperModule
  ],
})
export class AppModule {}