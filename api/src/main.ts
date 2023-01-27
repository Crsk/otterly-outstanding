import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
  Logger.log(`🚀 Application is running in ${config.get("environment")} mode`);
}

bootstrap();
