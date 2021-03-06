import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../shared/dto/user.dto';
import { CreateUserDto } from '../../shared/dto/create-user.dto';

@Injectable()
export class UsersService {
  private saltRounds = 10;
  ok: any = { "status": "ok" }
  nope: any = { "status": "false" }

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      console.log(createUserDto)
      // createUserDto.password = await this.getHash(createUserDto.password);
      const createdUser = new this.userModel(createUserDto);
      if (!createdUser) {
        throw new HttpException('Upps error ...', HttpStatus.BAD_REQUEST);
      }
      createdUser.save();
      return await createdUser;
    } catch (error) {
      console.log(error)
      throw new HttpException(`Callback createUser ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findUser(idUser: string): Promise<User[]> {
    return await this.userModel.findById(idUser).exec();
  }

  async findDni(dni: string): Promise<any> {
    const user = await this.userModel.findOne({ dni: dni }).exec();
    console.log(user)
    if (user === undefined || user === null) {
      return this.nope
    }
    const data = { "status": "ok", "id_client": user._id }
    return data
  }

  async deleteUser(idUser: string): Promise<User[]> {
    return await this.userModel.findByIdAndRemove(idUser);
  }

  async editUser(id, dto) {
    return await this.userModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
  }

  async checkDni(dni: string): Promise<any[]> {
    try {
      const check = await this.userModel.exists({ dni: dni })
      if (check) {
        this.findDni(dni).then((user) => {
          console.log(user)
          const response: any = { "status": "ok" }
          return response
        })
      }
      if (!check) {
        return this.nope
      }
    } catch (error) {
      return this.nope
    }
  }

}
