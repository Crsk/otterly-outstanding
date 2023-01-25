import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  Logger.log("Listening at http://localhost:" + process.env.PORT + "/" + globalPrefix);
  Logger.log(`🚀 Application is running in ${config.get("environment")} mode`);
}

bootstrap();
