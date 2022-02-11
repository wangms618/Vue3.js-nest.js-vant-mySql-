import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserdataService } from './userdata.service';
@Controller('userdata')
export class UserdataController {
    constructor(private readonly userdataService: UserdataService) { }

    /** 
     *  添加点赞
     * @param params
     */
    @Get('thumbsUp')
    async addThumbsUp(@Param() params): Promise<any> {
        return await this.userdataService.thumbsUp(params)
    }
}
