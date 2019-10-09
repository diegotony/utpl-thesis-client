import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '../../shared/dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from '../../shared/dto/user.dto';

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @HttpCode(204)
    async create(@Body() dto: CreateUserDto) {
      // TODO: map to UserDTO
      return (await this.usersService.createUser(dto));
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<User[]> {
      return (await this.usersService.findUsers())
      .map(v => ({
        _id : v._id,
        first_name: v.first_name, last_name: v.last_name, email: v.email, dni: v.dni,
      }));
    }

    @Get(':id')
    @HttpCode(200)
    async findUser(@Param() params): Promise<User[]> {
      return (await this.usersService.findUser(params.id));
    }

    @Put(':id')
    async editUser(@Param() params, @Body() dto:CreateUserDto){
      return (await this.usersService.editUser(params.id,dto));
    }

    @Put(':id')
    async deleteUser(@Param() params): Promise<User[]> {
      return (await this.usersService.deleteUser(params.id));
    }

    @MessagePattern({ cmd: 'compareHash' })
    async compareHash(password, hash): Promise<Boolean> {
      return (await this.usersService.compareHash(password, hash));
    }

  }
