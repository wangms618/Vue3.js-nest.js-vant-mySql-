import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { TransformInterceptor } from "./core/interceptor/transform.interceptor";
import { HttpExceptionFilter } from "./core/filter/http-exception.filter";
async function bootstrap() {
    // 创建一个appModule实例
    const app = await NestFactory.create(AppModule);
    // 全局路由前缀
    app.setGlobalPrefix("api/forum");

    app.enableCors({
        origin: " * ",
        methods: " GET,HEAD,PUT,PATCH,POST,DELETE ",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    // 过滤
    app.useGlobalFilters(new HttpExceptionFilter());
    // 拦截
    app.useGlobalInterceptors(new TransformInterceptor());
    await app.listen(8081);
}
bootstrap();
