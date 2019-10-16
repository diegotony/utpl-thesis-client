import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('User Service')
  .setDescription('The service API description')
  .setVersion('1.0')
  .addTag('user')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/users', app, document);

  await app.listen(config.PORT);
}
bootstrap();
