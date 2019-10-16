import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import config from './config/config';
@Module({
  imports: [MongooseModule.forRoot(`${config.MONGO_URI}`), UsersModule],
  controllers: [],
})
export class AppModule {}
