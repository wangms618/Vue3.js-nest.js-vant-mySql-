// 文章收藏表，与文章表是多对一的关系，与用户是一对一的关系
import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity("collect")
export class CollectsEntity {
  @PrimaryGeneratedColumn()
  id: number

  
}