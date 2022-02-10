import { Test, TestingModule } from '@nestjs/testing';
import { LevelTwoReplyController } from './level-two-reply.controller';

describe('LevelTwoReplyController', () => {
  let controller: LevelTwoReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelTwoReplyController],
    }).compile();

    controller = module.get<LevelTwoReplyController>(LevelTwoReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
