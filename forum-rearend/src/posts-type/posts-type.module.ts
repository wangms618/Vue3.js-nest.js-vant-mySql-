import { Module } from '@nestjs/common';
import { PostsTypeController } from './posts-type.controller';
import { PostsTypeService } from './posts-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from '../posts/posts.entity';
import { PostsTypeEntity } from './posts-type.entity';
@Module({
  imports: [TypeOrmModule.forFeature([PostsTypeEntity, PostsEntity])],
  controllers: [PostsTypeController],
  providers: [PostsTypeService]
})
export class PostsTypeModule { }
