import { Module } from '@nestjs/common';
import { UserdataController } from './userdata.controller';
import { UserdataService } from './userdata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserdataEntity } from './userdata.entity';
import { PostsEntity } from 'src/posts/posts.entity';
import { UsersEntity } from 'src/user/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserdataEntity, PostsEntity, UsersEntity])],
  controllers: [UserdataController],
  providers: [UserdataService]
})
export class UserdataModule { }
