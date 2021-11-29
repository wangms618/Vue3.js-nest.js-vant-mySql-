import { Module } from '@nestjs/common';
import { CollectsController } from './collects.controller';
import { CollectsService } from './collects.service';

@Module({
  controllers: [CollectsController],
  providers: [CollectsService]
})
export class CollectsModule {}
