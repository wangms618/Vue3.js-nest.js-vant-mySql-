import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { UsersEntity } from './user.entity';

export interface UsersRo {
    list: UsersEntity[];
    count: number
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) { }

    // 新建用户
    async create(userInfo: Partial<UsersEntity>): Promise<UsersEntity> {
        return await this.usersRepository.save(userInfo)
    }
    // 获取用户列表
    async findAll(query): Promise<UsersRo> {
        const user = await getRepository(UsersEntity).createQueryBuilder('user')

        const count = await user.getCount()

        const users = await user.getMany()
        return { list: users, count }
    }

    // 获取指定用户信息
    async findById(id: number): Promise<UsersEntity> {
        return this.usersRepository.findOne(id)
    }

    // 更新用户信息
    async updateById(id, userInfo): Promise<UsersEntity> {
        const existUser = await this.usersRepository.findOne(id)
        if (!existUser) {
            throw new HttpException(`id为${id}的用户不存在`, 403)
        }
        const updateUser = this.usersRepository.merge(existUser, userInfo)
        return this.usersRepository.save(updateUser)
    }




    // 删除用户
    async remove(id) {
        const existUser = await this.usersRepository.findOne(id)
        if (!existUser) {
            throw new HttpException(`id为${id}的用户不存在`, 403)
        }
        return await this.usersRepository.remove(existUser)
    }
}
