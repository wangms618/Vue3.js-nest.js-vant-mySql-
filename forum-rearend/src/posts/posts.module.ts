import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './posts.entity';
import { ReplyEntity } from '../reply/reply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity, ReplyEntity])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule { }
