import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import config from "./config/config";
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`
    ),
    UsersModule
  ],
  controllers: []
})
export class AppModule {}
