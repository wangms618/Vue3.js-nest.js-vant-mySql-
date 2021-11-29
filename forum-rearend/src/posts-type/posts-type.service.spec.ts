import { Test, TestingModule } from '@nestjs/testing';
import { PostsTypeService } from './posts-type.service';

describe('PostsTypeService', () => {
  let service: PostsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsTypeService],
    }).compile();

    service = module.get<PostsTypeService>(PostsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
