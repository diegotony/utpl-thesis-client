import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config/config';
import { OPTIONS } from './main-optinos';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {

  const redis = await NestFactory.createMicroservice(AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://' + config.REDIS_HOST + ':6379',
      }
    });
  redis.listen(() => console.log('Client-Microservice is listening'));

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('User Service')
    .setDescription('The service API description')
    .setVersion('1.0')
    .addTag('user')
    .build();
  app.enableCors();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger/client', app, document);
  await app.listen(config.PORT);

}
bootstrap();
