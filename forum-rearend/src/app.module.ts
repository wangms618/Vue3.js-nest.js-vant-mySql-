import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { ReplyModule } from './reply/reply.module';
import { PostsTypeModule } from './posts-type/posts-type.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CollectsModule } from './collects/collects.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PostsModule, // 文章
    UserModule, // 用户
    CommentModule, // 一级评论
    ReplyModule, // 二级评论
    PostsTypeModule, // 文章类别
    FavoritesModule, // 点赞
    CollectsModule, // 收藏
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
