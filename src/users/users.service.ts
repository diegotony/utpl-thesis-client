import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../shared/dto/user.dto';
import {CreateUserDto} from '../../shared/dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  private saltRounds = 10;
  private id = 0;

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
      createUserDto.password = await this.getHash(createUserDto.password);
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    }
    async findUsers(): Promise<User[]> {
      return await this.userModel.find().exec();
    }

    async findUser(idUser: string): Promise<User[]> {
      return await this.userModel.findById(idUser).exec();
    }

    async deleteUser(idUser: string): Promise<User[]> {
      return await this.userModel.findByIdAndRemove(idUser);
    }
    async editUser(data) {
      const id = data[0].id;
      const dto = data[0].dto;
      return await this.userModel.findByIdAndUpdate(id, dto, {new: true, runValidators: true});
    }

    async getHash(password: string|undefined): Promise<string> {
      return bcrypt.hash(password, this.saltRounds);
    }
    
    async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
      return bcrypt.compare(password, hash);
    }
}
