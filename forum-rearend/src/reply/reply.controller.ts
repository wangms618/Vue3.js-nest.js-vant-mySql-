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
import { ReplyService, ReplyRo } from "./reply.service";

@Controller("reply")
export class ReplyController {
    constructor(private readonly replyService: ReplyService) {}
    /**
     * 获取单个用户所有评论
     * @param id
     */
    @Get("userId")
    async findByUserId(@Query() query) {
        return await this.replyService.findByUserId(query.user_id);
    }

    /**
     * 新建评论
     * @param post
     */
    @Post()
    async create(@Body() reply) {
        return await this.replyService.create(reply);
    }

    /**
     * 获取指定评论具体信息
     * @param id
     */
    @Get(":id")
    async findById(@Param("id") id: number) {
        return await this.replyService.findById(id);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: number) {
        return await this.replyService.deleteById(id);
    }
}
