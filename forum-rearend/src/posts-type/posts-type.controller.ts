import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PostsTypeService, PostsTypeRo } from './posts-type.service';
@Controller('posts-type')
export class PostsTypeController {
    constructor(private readonly postsTypeService: PostsTypeService) { }

    /**
     * 创建文章
     * @param post
     */
    @Post()
    async create(@Body() post) {
        return await this.postsTypeService.create(post)
    }

    /**
     * 获取所有文章
     */
    @Get()
    async findAll(@Query() query): Promise<PostsTypeRo> {
        return await this.postsTypeService.findAll(query)
    }

    /**
     * 获取指定文章
     * @param id 
     */
    @Get(':id')
    async findById(@Param('id') id) {
        return await this.postsTypeService.findById(id)
    }

    /**
     * 更新文章
     * @param id 
     * @param post 
     */
    @Put(":id")
    async update(@Param("id") id, @Body() post) {
        return await this.postsTypeService.updateById(id, post)
    }

    /**
     * 删除
     * @param id 
     */
    @Delete(":id")
    async remove(@Param("id") id) {
        return await this.postsTypeService.remove(id)
    }
}
