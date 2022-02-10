import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { ReplyEntity } from './reply.entity'
import { PostsEntity } from '../posts/posts.entity'

export interface ReplyRo {
    list: ReplyEntity[];
    count: number
}


@Injectable()
export class ReplyService {
    constructor(
        @InjectRepository(ReplyEntity)
        private readonly replyRepository: Repository<ReplyEntity>,

        @InjectRepository(PostsEntity)
        private readonly postsRepository: Repository<PostsEntity>
    ) { }

    // 新建评论
    async create(replyInfo: Partial<ReplyEntity>): Promise<ReplyEntity> {
        const reply = await this.replyRepository.save(replyInfo);
        // @ts-ignore
        const { postsId: id } = replyInfo
        // 取到对应文章
        const posts = await this.postsRepository.findOne(id);
        reply.posts = posts
        // 存回对应评论
        await this.replyRepository.save(reply)
        return reply

    }

    // 获取对应文章id评论
    async findById(id: number): Promise<ReplyRo> {
        const reply = await getRepository(ReplyEntity).createQueryBuilder('reply').where(`PostsId=${id}`)
        const count = await reply.getCount()
        const replies = await reply.getMany()
        return { list: replies, count }
    }

}
