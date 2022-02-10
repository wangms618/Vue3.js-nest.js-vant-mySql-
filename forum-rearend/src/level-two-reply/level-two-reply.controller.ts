import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LevelTwoReplyService } from './level-two-reply.service'
@Controller('level-two-reply')
export class LevelTwoReplyController {
    constructor(
        private readonly replyTwoService: LevelTwoReplyService
    ) { }

    /**
     * 新建2级评论
     */
    @Post()
    async create(@Body() reply) {
        return await this.replyTwoService.create(reply)
    }

}
