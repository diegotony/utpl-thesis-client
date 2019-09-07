import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/users'), UsersModule],
  controllers: [AppController],
})
export class AppModule {}
