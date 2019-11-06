import { Model } from 'mongoose';
import { User } from '../../shared/dto/user.dto';
import { CreateUserDto } from '../../shared/dto/create-user.dto';
export declare class UsersService {
    private readonly userModel;
    private saltRounds;
    constructor(userModel: Model<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findUsers(): Promise<User[]>;
    findUser(idUser: string): Promise<User[]>;
    deleteUser(idUser: string): Promise<User[]>;
    editUser(id: any, dto: any): Promise<any>;
    getHash(password: string | undefined): Promise<string>;
    compareHash(password: string | undefined, hash: string | undefined): Promise<boolean>;
}
