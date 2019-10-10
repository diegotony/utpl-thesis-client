import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '../../shared/dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from '../../shared/dto/user.dto';
import { ApiImplicitBody, ApiImplicitParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @HttpCode(204)
    async create(@Body() dto: CreateUserDto) {

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
    @ApiImplicitParam({ name: 'id' })
    @HttpCode(200)
    async findUser(@Param() params): Promise<User[]> {
      return (await this.usersService.findUser(params.id));
    }

    @Put(':id')
    @ApiImplicitParam({ name: 'id' })   
    @HttpCode(204)
    async editUser(@Param() params, @Body() dto:CreateUserDto){
      return (await this.usersService.editUser(params.id,dto));
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    async deleteUser(@Param() params): Promise<User[]> {
      return (await this.usersService.deleteUser(params.id));
    }

    // @MessagePattern({ cmd: 'compareHash' })
    // async compareHash(password, hash): Promise<Boolean> {
    //   return (await this.usersService.compareHash(password, hash));
    // }

  }
