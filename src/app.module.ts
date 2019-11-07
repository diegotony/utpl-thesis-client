import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { TerminusOptionsService } from "./services/terminus-options/terminus-options.service";
import config from "./config/config";
import { TerminusModule } from "@nestjs/terminus";
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`
    ),
    UsersModule,
    TerminusModule.forRootAsync({useClass: TerminusOptionsService})
  ],
  controllers: [],
  providers: [TerminusOptionsService]
})
export class AppModule {}
