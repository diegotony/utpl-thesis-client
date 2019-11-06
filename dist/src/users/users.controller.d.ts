import { CreateUserDto } from "../../shared/dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "../../shared/dto/user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<User>;
    findAll(): Promise<any>;
    findUser(params: any): Promise<User[]>;
    editUser(params: any, dto: CreateUserDto): Promise<any>;
    deleteUser(params: any): Promise<User[]>;
}
