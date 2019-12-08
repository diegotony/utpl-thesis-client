import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  HttpCode,
  Body,
  HttpException,
  HttpStatus,
  NotFoundException
} from "@nestjs/common";
import { CreateUserDto } from "../../shared/dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "../../shared/dto/user.dto";
import { ApiImplicitParam, ApiUseTags } from "@nestjs/swagger";

import { MessagePattern } from '@nestjs/microservices';

@ApiUseTags('client')
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @MessagePattern( 'findClient' )
  async findById(id_user): Promise<any> {
    console.log(id_user)

    return await this.usersService.findUser(id_user)

  }

  @Post()
  @HttpCode(200)
  async createUser(@Body() dto: CreateUserDto) {
    return await this.usersService.createUser(dto);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<any> {
    const users = await this.usersService.findUsers();
    return users;
  }
  @Get(":id")
  @ApiImplicitParam({ name: "id" })
  @HttpCode(200)
  async findUser(@Param() params): Promise<User[]> {
    const user = await this.usersService.findUser(params.id);
    if (!user) {
      if (!user) throw new NotFoundException("Not Exist");
    }
    return user;
    // return (await this.usersService.findUser(params.id));
  }

  @Get("dni/:id")
  @ApiImplicitParam({ name: "id" })
  @HttpCode(200)
  async findDni(@Param() params): Promise<User> {
    const user = await this.usersService.findDni(params.id);
    if (!user) {
      if (!user) throw new NotFoundException("Not Exist");
    }
    return user;
    // return (await this.usersService.findUser(params.id));
  }

  @Put(":id")
  @ApiImplicitParam({ name: "id" })
  @HttpCode(204)
  async editUser(@Param() params, @Body() dto: CreateUserDto) {
    const user = await this.usersService.editUser(params.id, dto);
    if (!user) throw new NotFoundException("Not Exist");
    return user;

    // return (await this.usersService.editUser(params.id, dto));
  }

  @Delete(":id")
  @ApiImplicitParam({ name: "id" })
  async deleteUser(@Param() params): Promise<User[]> {
    const user = await this.usersService.deleteUser(params.id);
    if (!user) throw new NotFoundException("Not Exist");
    return user;
    // return (await this.usersService.deleteUser(params.id));
  }

  @Get('check/:id')
  @ApiImplicitParam({ name: 'id' })
  @HttpCode(200)
  @HttpCode(200)
  async check(@Param() params): Promise<any[]> {
    console.log(params)
    return (await this.usersService.checkDni(params.id));
  }

  // @MessagePattern({ cmd: "getIdUser" })
  // async findUserRedis(): Promise<User[]> {
  //   return (await this.usersService.findUser("5de02c83accce83435f4493a"));

  // }
  @MessagePattern({ cmd: 'LIST_MOVIES' })
  listMovies(): string[] {
    return ['Pulp Fiction', 'Blade Runner', 'Hatred'];
  }

}
