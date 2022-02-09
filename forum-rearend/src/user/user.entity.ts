import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
    // id
    @PrimaryGeneratedColumn()
    id: number; // 标记为主列，值自动生成

    // 账号
    @Column({ length: 50 })
    user_account: string;

    // 姓名
    @Column({ length: 50 })
    user_name: string;

    // 昵称
    @Column({ length: 20 })
    user_nickname: string;

    // 密码
    @Column({ length: 50 })
    user_password: string;

    // 生日
    @Column({ length: 20 })
    user_birthday: string;

    // 性别
    @Column({ default: '男', length: 10 })
    user_sex: string;

    // 头像url地址
    @Column({ default: '' })
    user_imgUrl: string;

    // 所在学校
    @Column({ length: 50 })
    user_colleges: string;

    // 年级
    @Column({ default: 0 })
    user_grade: number;

    // 手机号
    @Column({ length: 50 })
    user_phone: string;

    // 自我介绍
    @Column({ default: '' })
    user_show: string

    // 创建时间
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    create_time: Date;

    // 更新时间
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    update_time: Date;
}
