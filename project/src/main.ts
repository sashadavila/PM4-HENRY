import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDoc = new DocumentBuilder()
  .setTitle('PI-BACKEND')
  .setVersion('1.0.0')
  .setDescription(" esta es una api de henry")
  .addBearerAuth()
  .build();

  const ducumentModule = SwaggerModule.createDocument(app,swaggerDoc);

  SwaggerModule.setup('docs', app, ducumentModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
