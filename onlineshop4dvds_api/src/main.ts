import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true // make sure additional props sent along with a request will be stripped out automatically
    })
  );

  app.use(cookieParser());
  
  await app.listen(5000);
}
bootstrap();
