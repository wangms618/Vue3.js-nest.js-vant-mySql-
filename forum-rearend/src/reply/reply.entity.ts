import {
    Column,
    OneToMany,
    ManyToOne,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";
import { PostsEntity } from "../posts/posts.entity";
// 一级评论
// 和文章表应该是多对一的关系，多条评论对应一篇文章
@Entity("reply")
export class ReplyEntity {
    // id
    @PrimaryGeneratedColumn()
    id: number; // 标记为主列，值自动生成

    // 内容
    @Column("text")
    content: string;

    // 评论者id
    @Column()
    user_id: number;

    // 回复目标评论id
    @Column()
    toCommentId: number;

    // 点赞数
    @Column()
    commentLikeCount: number;

    // 回复顶级评论的id
    @Column()
    rootCommentId: number;

    // 和文章是多对一关系
    @ManyToOne(type => PostsEntity, posts => posts.reply)
    posts: PostsEntity;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    create_time: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    update_time: Date;
}
