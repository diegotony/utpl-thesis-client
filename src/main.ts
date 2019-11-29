import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/config';
import {OPTIONS} from './main-optinos';

async function bootstrap() {

  const redis = await NestFactory.createMicroservice(AppModule, OPTIONS);
  redis.listen(() => console.log('Microservice-Client is listening'));

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('User Service')
  .setDescription('The service API description')
  .setVersion('1.0')
  .addTag('user')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger/client', app, document);
  await app.listen(config.PORT);
  
}
bootstrap();
