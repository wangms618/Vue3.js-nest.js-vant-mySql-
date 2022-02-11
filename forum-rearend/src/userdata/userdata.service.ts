import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { UserdataEntity } from './userdata.entity';
import { PostsEntity } from 'src/posts/posts.entity';
import { UsersEntity } from 'src/user/user.entity';
@Injectable()
export class UserdataService {
    constructor(
        @InjectRepository(UserdataEntity)
        private readonly userdataRepository: Repository<UserdataEntity>,

        @InjectRepository(PostsEntity)
        private readonly postsRepository: Repository<PostsEntity>,

        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) { }

    // 用户点赞
    async thumbsUp(param: Partial<UserdataEntity>): Promise<any> {
        // @ts-ignore
        const { userId, postsId } = param
        const user = await this.usersRepository.findOne(userId)
        if (!user) {
            throw new HttpException('无此用户id', 403);
        }
        const posts = await this.postsRepository.findOne(postsId)
        if (!posts) {
            throw new HttpException('无此文章id', 403);
        }

        return await this.userdataRepository.save(param)
    }
}
