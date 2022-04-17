import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Repository } from "typeorm";
import { UsersEntity } from "./user.entity";
import { UserInfo } from "@/interface";
import { userInfoTransform } from "@/hooks/user/index";
export interface UsersRo {
    list: UsersEntity[];
    count: number;
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) {}

    // 新建用户
    async create(userInfo: Partial<UsersEntity>): Promise<UsersEntity> {
        // 如果当前用户已存在,返回报错
        let data = await this.usersRepository.find({
            where: { user_account: userInfo.user_account },
        });
        if (data.length !== 0) {
            throw new HttpException(`该账号已存在`, 403);
        }
        return await this.usersRepository.save(userInfo);
    }

    // 用户登录，返回密码就好
    async userLogin(account) {
        const user = await this.usersRepository.find({
            where: { user_account: account },
        });
        // 如果没有这个账号，怎么办
        if (user.length == 0) {
            throw new HttpException(`该账号不存在`, 403);
        }
        return {
            salt: user[0].user_password,
            id: user[0].id,
        };
    }

    // 获取用户列表
    async findAll(query): Promise<UsersRo> {
        const user = await getRepository(UsersEntity).createQueryBuilder(
            "user"
        );

        const count = await user.getCount();

        const users = await user.getMany();
        return { list: users, count };
    }

    // 获取指定用户信息
    async findById(id: number): Promise<UserInfo> {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new HttpException(`此id不存在`, 403);
        }
        const data = userInfoTransform(user);
        return data;
    }

    // 更新用户信息
    async updateById(id, userInfo): Promise<UsersEntity> {
        const existUser = await this.usersRepository.findOne(id);
        if (!existUser) {
            throw new HttpException(`id为${id}的用户不存在`, 403);
        }
        const updateUser = this.usersRepository.merge(existUser, userInfo);
        return this.usersRepository.save(updateUser);
    }

    // 删除用户
    async remove(id) {
        const existUser = await this.usersRepository.findOne(id);
        if (!existUser) {
            throw new HttpException(`id为${id}的用户不存在`, 403);
        }
        return await this.usersRepository.remove(existUser);
    }

    // 查询是否允许注册这个手机号
    async checkPhone(phone: number): Promise<Boolean> {
        const existUser = await this.usersRepository.find({
            where: { user_phone: phone },
        });
        if (existUser.length == 0) {
            return true;
        }
        return false;
    }

    // 查询是否允许注册这个昵称
    async checkNickname(nickname: string): Promise<Boolean> {
        const existUser = await this.usersRepository.find({
            where: { user_nickname: nickname },
        });
        if (existUser.length == 0) {
            return true;
        }
        return false;
    }

    // 查询是否允许注册这个账号
    async checkAccount(account: string): Promise<Boolean> {
        const existUser = await this.usersRepository.find({
            where: { user_account: account },
        });
        if (existUser.length == 0) {
            return true;
        }
        return false;
    }
}
