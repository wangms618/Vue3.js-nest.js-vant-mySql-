import { Test, TestingModule } from '@nestjs/testing';
import { LevelTwoReplyService } from './level-two-reply.service';

describe('LevelTwoReplyService', () => {
  let service: LevelTwoReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevelTwoReplyService],
    }).compile();

    service = module.get<LevelTwoReplyService>(LevelTwoReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
