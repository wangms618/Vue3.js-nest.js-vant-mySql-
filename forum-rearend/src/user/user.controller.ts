import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from "@nestjs/common";
import { query } from "express";
import { UserService, UsersRo } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    /**
     * 创建用户
     * @param Body
     */
    @Post()
    async create(@Body() userInfo) {
        return await this.userService.create(userInfo);
    }

    /**
     * 查询是否允许注册当前手机号
     * @param phone 手机号
     * @returns Promise<Boolean>
     */
    @Get("checkPhone")
    async checkPhone(@Query() query): Promise<Boolean> {
        return await this.userService.checkPhone(query.phone);
    }

    /**
     * 查询是否允许注册当前账号
     * @param account
     * @returns Promise<Boolean>
     */
    @Get("checkAccount")
    async checkAccount(@Query() query): Promise<Boolean> {
        return await this.userService.checkAccount(query.account);
    }

    /**
     * 查询是否允许注册当前昵称
     * @param nickname
     * @returns Promise<Boolean>
     */
    @Get("checkNickname")
    async checkNickname(@Query() query): Promise<Boolean> {
        return await this.userService.checkNickname(query.nickname);
    }

    /**
     * 获取所有用户
     */
    @Get()
    async findAll(@Query() query): Promise<UsersRo> {
        return await this.userService.findAll(query);
    }

    /**
     * 获取指定用户
     * @param id
     */
    @Get(":id")
    async findById(@Param("id") id) {
        return await this.userService.findById(id);
    }

    /**
     * 更新文章
     * @param id
     * @param post
     */
    @Put(":id")
    async update(@Param("id") id, @Body() post) {
        return await this.userService.updateById(id, post);
    }

    /**
     * 删除
     * @param id
     */
    @Delete("id")
    async remove(@Param("id") id) {
        return await this.userService.remove(id);
    }
}
