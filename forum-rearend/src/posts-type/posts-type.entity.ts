import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PostsEntity } from 'src/posts/posts.entity';
@Entity("postsType")
export class PostsTypeEntity {

  // id
  @PrimaryGeneratedColumn()
  id: number;

  // 模块名
  @Column()
  name: string

  // 模块介绍
  @Column({ default: '', length: 200 })
  info: string

  // 和文章多对一
  @OneToMany(() => PostsEntity, (posts) => posts.postsType)
  posts: PostsEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}

// 用户不需要去care模块，只有文章对应模块，用户不用管