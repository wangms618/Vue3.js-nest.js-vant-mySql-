//    posts/posts.entity.ts
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReplyEntity } from '../reply/reply.entity'
// * @Entity 装饰器作用: 告诉typeorm，PostsEntity是一个实体，这个实体是映射到数据库的一个表格
@Entity('posts')
export class PostsEntity {
    // @PrimaryGeneratedColumn装饰器作用：在用户表里面创建一个id字段，并将其设置为主键 ，并自增
    @PrimaryGeneratedColumn()
    id: number; // 标记为主列，值自动生成

    @Column()
    user_id: number;

    @Column({ length: 50 })
    title: string;

    @Column('text')
    content: string;

    @Column({ default: 0 })
    replyNum: number;

    @Column({ default: 0 })
    upNum: number;

    @Column({ default: 0 })
    collectionNum: number;

    @Column({ default: 0 })
    clickNum: number;

    @Column({ default: 1 })
    postsType_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    create_time: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    update_time: Date;

    @OneToMany((type) => ReplyEntity, (reply) => reply.posts, {
        cascade: true
    })
    reply: ReplyEntity[];
}
