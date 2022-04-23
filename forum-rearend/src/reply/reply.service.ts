import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Repository } from "typeorm";
import { ReplyEntity } from "./reply.entity";
import { PostsEntity } from "../posts/posts.entity";
export interface ReplyRo {
    list: ReplyEntity[];
    count: number;
}

@Injectable()
export class ReplyService {
    constructor(
        @InjectRepository(ReplyEntity)
        private readonly replyRepository: Repository<ReplyEntity>,

        @InjectRepository(PostsEntity)
        private readonly postsRepository: Repository<PostsEntity>
    ) {}

    // 新建评论
    async create(replyInfo: Partial<ReplyEntity>): Promise<ReplyEntity> {
        const reply = await this.replyRepository.save(replyInfo);
        // @ts-ignore
        const { postsId: id } = replyInfo;
        // 取到对应文章
        const posts = await this.postsRepository.findOne(id);
        reply.posts = posts;
        // 存回对应评论
        await this.replyRepository.save(reply);
        return reply;
    }

    // 获取具体评论的信息
    async findById(id: number): Promise<ReplyEntity> {
        const reply = await this.replyRepository.findOne(id);
        return reply;
    }

    // 获取单个用户的所有评论
    async findByUserId(user_id) {
        const replyList = await this.replyRepository.find({
            where: { user_id: user_id },
        });
        for (let i = 0; i < replyList.length; i++) {
            const posts = await this.postsRepository.findOne(
                replyList[i].postsId
            );
            replyList[i].posts = posts;
        }
        return replyList;
    }

    // 删除评论
    async deleteById(id) {
        const existReply = await this.replyRepository.findOne(id);
        if (!existReply) {
            throw new HttpException(`id为${id}的评论不存在`, 403);
        }
        return await this.replyRepository.remove(existReply);
    }
}
