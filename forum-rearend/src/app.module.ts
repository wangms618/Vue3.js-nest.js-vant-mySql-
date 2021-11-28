import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
@Module({
  imports: [TypeOrmModule.forRoot(), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
