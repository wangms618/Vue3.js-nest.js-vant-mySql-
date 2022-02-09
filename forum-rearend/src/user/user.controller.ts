import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService, UsersRo } from './user.service'



@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    /**
     * 创建用户
     * @param post
     */
    @Post()
    async create(@Body() userInfo) {
        return await this.userService.create(userInfo)
    }

    /**
     * 获取所有用户
     */
    @Get()
    async findAll(@Query() query): Promise<UsersRo> {
        return await this.userService.findAll(query)
    }

    /**
     * 获取指定用户
     * @param id
     */
    @Get(':id')
    async findById(@Param('id') id) {
        return await this.userService.findById(id)
    }

    /**
     * 更新文章
     * @param id
     * @param post
     */
    @Put(":id")
    async update(@Param("id") id, @Body() post) {
        return await this.userService.updateById(id, post)
    }

    /**
     * 删除
     * @param id
     */
    @Delete("id")
    async remove(@Param("id") id) {
        return await this.userService.remove(id)
    }
}




