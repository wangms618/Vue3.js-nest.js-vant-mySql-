import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 来自appModule
  const app = await NestFactory.create(AppModule);
  // 全局路由前缀
  app.setGlobalPrefix('api/forum');

  app.enableCors({
    origin: ' * ',
    methods: ' GET,HEAD,PUT,PATCH,POST,DELETE ',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(8081);
}
bootstrap();
