import { Module } from '@nestjs/common';
import { LevelTwoReplyController } from './level-two-reply.controller';
import { LevelTwoReplyService } from './level-two-reply.service';
import { ReplyTwoEntity } from './level-two-reply.entity';
import { ReplyEntity } from '../reply/reply.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ReplyTwoEntity, ReplyEntity])],
  controllers: [LevelTwoReplyController],
  providers: [LevelTwoReplyService]
})
export class LevelTwoReplyModule { }
