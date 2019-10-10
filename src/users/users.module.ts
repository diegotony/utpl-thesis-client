import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {UserSchema} from './../schemas/user.schema';
import { User } from 'shared/dto/user.dto';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, {
    provide: getModelToken('User'),
    useValue: User,
  },],
})
export class UsersModule {}
