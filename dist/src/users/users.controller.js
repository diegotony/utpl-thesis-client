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
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("../../shared/dto/create-user.dto");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUser(dto) {
        return await this.usersService.createUser(dto);
    }
    async findAll() {
        const users = await this.usersService.findUsers();
        return users;
    }
    async findUser(params) {
        const user = await this.usersService.findUser(params.id);
        if (!user) {
            if (!user)
                throw new common_1.NotFoundException("Not Exist");
        }
        return user;
    }
    async editUser(params, dto) {
        const user = await this.usersService.editUser(params.id, dto);
        if (!user)
            throw new common_1.NotFoundException("Not Exist");
        return user;
    }
    async deleteUser(params) {
        const user = await this.usersService.deleteUser(params.id);
        if (!user)
            throw new common_1.NotFoundException("Not Exist");
        return user;
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    swagger_1.ApiImplicitParam({ name: "id" }),
    common_1.HttpCode(200),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUser", null);
__decorate([
    common_1.Put(":id"),
    swagger_1.ApiImplicitParam({ name: "id" }),
    common_1.HttpCode(204),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUser", null);
__decorate([
    common_1.Delete(":id"),
    swagger_1.ApiImplicitParam({ name: "id" }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    common_1.Controller("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map