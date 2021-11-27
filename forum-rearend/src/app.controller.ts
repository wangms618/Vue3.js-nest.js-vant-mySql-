import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('community')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  getList(): object {
    return this.appService.getList();
  }
}
