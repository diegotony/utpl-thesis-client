import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '../../shared/dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from '../../shared/dto/user.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @MessagePattern({ cmd: 'createUser' })
    async create(dto: CreateUserDto) {
      // TODO: map to UserDTO
      return (await this.usersService.createUser(dto));
    }

    @MessagePattern({ cmd: 'findUsers' })
    async findAll(): Promise<User[]> {
      return (await this.usersService.findUsers())
      .map(v => ({
        _id : v._id,
        first_name: v.first_name, last_name: v.last_name, email: v.email, dni: v.dni,
      }));
    }

    @MessagePattern({ cmd: 'findUser' })
    async findUser(idUser): Promise<User[]> {
      return (await this.usersService.findUser(idUser));
    }

    @MessagePattern({ cmd: 'editUser' })
    async editUser(data){
      return (await this.usersService.editUser(data));
    }

    @MessagePattern({ cmd: 'deleteUser' })
    async deleteUser(idUser): Promise<User[]> {
      return (await this.usersService.deleteUser(idUser));
    }

    @MessagePattern({ cmd: 'compareHash' })
    async compareHash(password, hash): Promise<Boolean> {
      return (await this.usersService.compareHash(password, hash));
    }

  }
