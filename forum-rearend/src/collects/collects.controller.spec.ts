import { Test, TestingModule } from '@nestjs/testing';
import { CollectsController } from './collects.controller';

describe('CollectsController', () => {
  let controller: CollectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectsController],
    }).compile();

    controller = module.get<CollectsController>(CollectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
