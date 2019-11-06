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
import {
  ApiImplicitBody,
  ApiImplicitParam,
  ApiResponse
} from "@nestjs/swagger";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
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

  // @MessagePattern({ cmd: 'compareHash' })
  // async compareHash(password, hash): Promise<Boolean> {
  //   return (await this.usersService.compareHash(password, hash));
  // }
}
