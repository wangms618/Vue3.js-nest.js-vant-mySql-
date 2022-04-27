import { PostsService, PostsRo } from "./posts.service";
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

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    /**
     * 创建文章
     * @param post
     */
    @Post()
    async create(@Body() post) {
        return await this.postsService.create(post);
    }

    /**
     * 获取某个用户的所有文章
     * @param id
     * @returns postList
     */
    @Get("userId")
    async findByUser(@Query() query) {
        return await this.postsService.findByUser(query.id);
    }

    @Get("searchPosts")
    async findSearch(@Query() query) {
        return await this.postsService.findSearch(query);
    }
    
    /**
     * 获取指定文章
     * @param id
     */
    @Get(":id")
    async findById(@Param("id") id) {
        return await this.postsService.findById(id);
    }

    /**
     * 获取所有文章
     */
    @Get()
    async findAll(@Query() query): Promise<PostsRo> {
        return await this.postsService.findAll(query);
    }

    /**
     * 更新文章
     * @param id
     * @param post
     */
    @Put(":id")
    async update(@Param("id") id, @Body() post) {
        return await this.postsService.updateById(id, post);
    }

    /**
     * 删除
     * @param id
     */
    @Delete(":id")
    async remove(@Param("id") id) {
        return await this.postsService.remove(id);
    }
}
