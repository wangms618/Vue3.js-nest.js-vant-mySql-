import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

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





}

// 用户不需要去care模块，只有文章对应模块，用户不用管