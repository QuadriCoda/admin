import { ApiProperty } from '@nestjs/swagger';

export class ScrapperConfig {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the config'
  })
  id: number;

  @ApiProperty({
    example: 'http://example.com',
    description: 'The URL to scrape'
  })
  url: string;

  @ApiProperty({
    example: 5000,
    description: 'The interval in milliseconds'
  })
  interval: number;
}
