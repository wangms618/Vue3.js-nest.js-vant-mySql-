import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserdataService } from './userdata.service';
@Controller('userdata')
export class UserdataController {
    constructor(private readonly userdataService: UserdataService) { }

    /** 
     *  添加点赞
     * @param params
     */
    @Get('userAction')
    async userAction(@Param() params): Promise<any> {
        return await this.userdataService.userAction(params)
    }


}
