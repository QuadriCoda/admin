import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Scrapper Admin API')
    .setDescription('The Scrapper Admin API description')
    .setVersion('1.0')
    .addTag('scrapper')
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
