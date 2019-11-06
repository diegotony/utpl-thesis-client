"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.saltRounds = 10;
    }
    async createUser(createUserDto) {
        try {
            const createdUser = new this.userModel(createUserDto);
            if (!createdUser) {
                throw new common_1.HttpException('Upps error ...', common_1.HttpStatus.BAD_REQUEST);
            }
            createdUser.save();
            return await createdUser;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(`Callback createUser ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findUsers() {
        return await this.userModel.find().exec();
    }
    async findUser(idUser) {
        return await this.userModel.findById(idUser).exec();
    }
    async deleteUser(idUser) {
        return await this.userModel.findByIdAndRemove(idUser);
    }
    async editUser(id, dto) {
        return await this.userModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
    }
    async getHash(password) {
        return bcrypt.hash(password, this.saltRounds);
    }
    async compareHash(password, hash) {
        return bcrypt.compare(password, hash);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map