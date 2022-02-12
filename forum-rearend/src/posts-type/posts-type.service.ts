import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { PostsTypeEntity } from './posts-type.entity';

export interface PostsTypeRo {
    list: PostsTypeEntity[];
    count: number
}
@Injectable()
export class PostsTypeService {
    constructor(
        @InjectRepository(PostsTypeEntity)
        private readonly postsTypeRepository: Repository<PostsTypeEntity>,
    ) { }

    // 创建分类
    async create(typeInfo: Partial<PostsTypeEntity>): Promise<PostsTypeEntity> {
        const { name } = typeInfo
        if (!name) {
            throw new HttpException('缺少分类标题', 403)
        }
        const data = await this.postsTypeRepository.findOne({ where: { name } })
        if (data) {
            throw new HttpException('该分类已存在', 401)
        }
        return await this.postsTypeRepository.save(typeInfo)
    }

    // 获取分类列表
    async findAll(query): Promise<PostsTypeRo> {
        const qb = await getRepository(PostsTypeEntity).createQueryBuilder('postsType')
        const count = await qb.getCount();
        const { pageNum = 1, pageSize = 10, ...params } = query;
        qb.limit(pageSize);
        qb.offset(pageSize * (pageNum - 1));

        const posts = await qb.getMany();
        return { list: posts, count: count };
    }

    // 获取指定分类
    async findById(id): Promise<PostsTypeEntity> {
        const data = await this.postsTypeRepository.findOne(id);
        return data
    }

    // 更新分类
    async updateById(id, post): Promise<PostsTypeEntity> {
        const existPost = await this.postsTypeRepository.findOne(id);
        if (!existPost) {
            throw new HttpException(`id为${id}的分类不存在`, 403);
        }
        const updatePost = this.postsTypeRepository.merge(existPost, post);
        return this.postsTypeRepository.save(updatePost);
    }

    // 删除分类
    async remove(id: number) {
        const existPost = await this.postsTypeRepository.findOne(id);
        if (!existPost) {
            throw new HttpException(`id为${id}的分类不存在`, 403);
        }
        return await this.postsTypeRepository.remove(existPost);
    }
}


