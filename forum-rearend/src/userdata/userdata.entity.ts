import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostsEntity } from 'src/posts/posts.entity';
import { UsersEntity } from 'src/user/user.entity';
@Entity("userdata")
export class UserdataEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => UsersEntity, (user) => user.userdata)
  user: UsersEntity

  @ManyToOne(() => PostsEntity, (posts) => posts.userdata)
  posts: PostsEntity
  /**
   * 类型
   * @param 1 新建文章
   * @param 2 点赞
   * @param 3 收藏
   */
  @Column({ default: 1 })
  type: number




}