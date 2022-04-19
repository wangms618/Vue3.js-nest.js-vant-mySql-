import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Repository } from "typeorm";
import { PostsEntity } from "./posts.entity";
import { UsersEntity } from "@/user/user.entity";

export interface PostsRo {
    list: PostsEntity[];
    count: number;
}

// todo CRUD操作
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
        qb.where("1 = 1");
        // 倒序
        qb.orderBy("post.create_time", "DESC");
        // 获取当前数据库已有的文章数量
        const count = await qb.getCount();
        // 第一页，10条数据
        const { pageNum = 1, pageSize = 10, ...params } = query;
        // 单次取用的数据量
        qb.limit(pageSize);
        // 前置量
        qb.offset(pageSize * (pageNum - 1));

        const posts = await qb.getMany();
        return { list: posts, count: count };
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
