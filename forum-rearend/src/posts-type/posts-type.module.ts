import { Module } from '@nestjs/common';
import { PostsTypeController } from './posts-type.controller';
import { PostsTypeService } from './posts-type.service';

@Module({
  controllers: [PostsTypeController],
  providers: [PostsTypeService]
})
export class PostsTypeModule {}
