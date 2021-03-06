import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
// import { TerminusOptionsService } from "./services/terminus-options/terminus-options.service";
import config from "./config/config";
import { AppController } from "./app.controller";
// import { TerminusModule } from "@nestjs/terminus";
@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://"+config.MONGO_HOST+"/"+config.MONGO_DB, {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,},
      
    ),
    UsersModule,
    // TerminusModule.forRootAsync({useClass: TerminusOptionsService})
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
