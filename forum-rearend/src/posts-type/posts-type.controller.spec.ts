import { Test, TestingModule } from '@nestjs/testing';
import { PostsTypeController } from './posts-type.controller';

describe('PostsTypeController', () => {
  let controller: PostsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsTypeController],
    }).compile();

    controller = module.get<PostsTypeController>(PostsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
