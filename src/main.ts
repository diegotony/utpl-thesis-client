import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import {OPTIONS} from './main.options';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, OPTIONS);
  app.listen(() => console.log(' User-Microservice is listening'));
}
bootstrap();
