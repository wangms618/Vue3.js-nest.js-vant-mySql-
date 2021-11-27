import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getList(): object {
    return {
      title: '标题111',
      context: '内容',
    };
  }
}
