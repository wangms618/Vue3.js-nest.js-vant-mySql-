import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { ReplyEntity } from '../reply/reply.entity'
import { ReplyTwoEntity } from './level-two-reply.entity';

export interface ReplyTwoRo {
    list: ReplyTwoEntity[];
    count: number
}

@Injectable()
export class LevelTwoReplyService {
    constructor(
        @InjectRepository(ReplyEntity)
        private readonly replyRepository: Repository<ReplyEntity>,

        @InjectRepository(ReplyTwoEntity)
        private readonly replyTwoRepository: Repository<ReplyTwoEntity>
    ) { }

    /**
     * 创建评论
     */
    async create(replyInfo: Partial<ReplyTwoEntity>): Promise<ReplyTwoEntity> {
        const replyTwo = await this.replyTwoRepository.save(replyInfo);
        // @ts-ignore
        const reply = await this.replyRepository.findOne(replyInfo.parentId)
        replyTwo.reply = reply
        await this.replyTwoRepository.save(replyTwo)
        return replyTwo
    }
}


