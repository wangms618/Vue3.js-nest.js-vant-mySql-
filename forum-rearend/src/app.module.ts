import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { ReplyModule } from './reply/reply.module';
import { PostsTypeModule } from './posts-type/posts-type.module';
import { UserdataModule } from './userdata/userdata.module';
@Module({
  // * 导出服务的列表，供其他模块导入使用。如果希望当前模块下的服务可以被其他模块共享，需要在这里配置导出
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    PostsModule, // 文章
    UserModule, // 用户
    ReplyModule, // 评论
    PostsTypeModule, // 文章类别
    UserdataModule, // 用户操作表
  ],
  // * 处理http请求，包括路由控制，向客户端返回响应，将具体业务逻辑委托给providers处理
  controllers: [AppController],
  // * Nest.js注入器实例化的提供者（服务提供者），处理具体的业务逻辑，各个模块之间可以共享
  providers: [AppService],
})
export class AppModule { }
