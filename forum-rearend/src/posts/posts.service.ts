import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Like, Repository } from "typeorm";
import { PostsEntity } from "./posts.entity";
import { UsersEntity } from "@/user/user.entity";

export interface PostsRo {
    list: PostsEntity[];
    count: number;
}

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostsEntity)
        private readonly postsRepository: Repository<PostsEntity>
    ) {}

    // 创建文章
    async create(post: Partial<PostsEntity>): Promise<PostsEntity> {
        // const { title } = post;
        // if (!title) {
        //   throw new HttpException('缺少文章标题', 403);
        // }
        // const doc = await this.postsRepository.findOne({ where: { title } });
        // if (doc) {
        //   throw new HttpException('文章已存在', 403);
        // }
        return await this.postsRepository.save(post);
    }

    // 获取文章列表
    async findAll(query): Promise<PostsRo> {
        const qb = await getRepository(PostsEntity).createQueryBuilder("post");
        const { pageNum = 1, pageSize = 20, ...params } = query;
        const { type, topic } = params;
        if (type == 0) {
            qb.orderBy("post.clickNum", "DESC");
        } else if (type == 1) {
            qb.orderBy("post.create_time", "DESC");
        } else if (type == 2) {
            qb.orderBy("post.create_time", "DESC");
            qb.where({ topic: topic });
        } else {
            qb.orderBy("post.create_time", "DESC");
        }
        // 倒序
        const count = await qb.getCount();
        // 单次取用的数据量
        qb.limit(pageSize);
        // 前置量
        qb.offset(pageSize * (pageNum - 1));

        const posts = await qb.getMany();
        return { list: posts, count: count };
    }

    async findSearch(query) {
        const { key } = query;
        const data = await this.postsRepository.find({
            where: [{title: Like(`%${key}%`),},
                {content: Like(`%${key}%`),},
                {topic: Like(`%${key}%`),},
                {user_nickname: Like(`%${key}%`),},],});
        return data;
    }

    // 获取单个用户的所有文章
    async findByUser(id) {
        const data = await this.postsRepository.find({
            where: { user_id: id },
        });
        return data;
    }

    // 获取指定文章
    async findById(id: number) {
        const post = await this.postsRepository.findOne(id, {
            relations: ["reply"],
        });
        const userRepository = getRepository(UsersEntity);
        // 取到对应user
        const user = await userRepository.findOne(post.user_id);
        const { user_nickname, user_imgUrl, user_colleges, user_grade } = user;
        post.clickNum += 1;
        const data = await this.postsRepository.save(post);
        return {
            ...data,
            user_nickname,
            user_imgUrl,
            user_colleges,
            user_grade,
        };
    }

    // 更新文章
    async updateById(id, post): Promise<PostsEntity> {
        const existPost = await this.postsRepository.findOne(id);
        if (!existPost) {
            throw new HttpException(`id为${id}的文章不存在`, 403);
        }
        const updatePost = this.postsRepository.merge(existPost, post);
        return this.postsRepository.save(updatePost);
    }

    // 刪除文章
    async remove(id) {
        const existPost = await this.postsRepository.findOne(id);
        if (!existPost) {
            throw new HttpException(`id为${id}的文章不存在`, 403);
        }
        return await this.postsRepository.remove(existPost);
    }
}
