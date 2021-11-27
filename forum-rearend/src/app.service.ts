import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getList(): object {
    return {
      title: '标题',
      context: '内容',
    };
  }
}
