import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyEntity } from './reply.entity'
import { PostsEntity } from '../posts/posts.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ReplyEntity, PostsEntity])],
  controllers: [ReplyController],
  providers: [ReplyService]
})
export class ReplyModule { }
