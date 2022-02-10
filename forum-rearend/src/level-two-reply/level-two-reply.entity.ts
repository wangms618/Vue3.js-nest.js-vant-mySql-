import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { ReplyEntity } from '../reply/reply.entity'

@Entity('replyTwo')
export class ReplyTwoEntity {
    /**
     * id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 用户id
     */
    @Column()
    user_id: number;

    /**
     * 评论内容
     */
    @Column('text')
    content: string;

    /**
     * 和父评论是多对一关系
     * 父评论id
     */
    @ManyToOne(() => ReplyEntity, (reply) => reply.replyTwo)
    @JoinColumn({ name: 'parentId' })
    reply: ReplyEntity;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    create_time: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    update_time: Date;

}