//    posts/posts.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// * @Entity 装饰器作用: 告诉typeorm，PostsEntity是一个实体，这个实体是映射到数据库的一个表格
@Entity("posts")
export class PostsEntity {
    // @PrimaryGeneratedColumn装饰器作用：在用户表里面创建一个id字段，并将其设置为主键 ，并自增
    @PrimaryGeneratedColumn()
    id:number; // 标记为主列，值自动生成

    @Column({ length:50 })
    title: string;

    @Column({ length: 20})
    author: string;

    @Column("text")
    content:string;

    @Column({default:''})
    thumb_url: string;

    @Column('tinyint')
    type:number

    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    create_time: Date

    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    update_time: Date
}
