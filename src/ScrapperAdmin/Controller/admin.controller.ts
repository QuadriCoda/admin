import { Controller, Get } from '@nestjs/common';
import { ScrapperConfig } from '../Model/scrapper-config.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  @Get('config')
  getConfig(): ScrapperConfig {
    // This should be replaced with actual logic to retrieve the config
    const config = new ScrapperConfig();
    config.id = 1;
    config.url = 'http://example.com';
    config.interval = 5000;
    return config;
  }

  // Add other endpoints here
}

