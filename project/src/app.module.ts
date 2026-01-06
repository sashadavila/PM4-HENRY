import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { TypeOrmModule }  from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { FileuploadModule } from './fileupload/fileupload.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';


@Module({ 
  imports:[
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot({isGlobal: true, load: [typeorm]}),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService)=> config.get('typeorm')!

    }),
    OrdersModule,
    CategoriesModule,
    FileuploadModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions:{ expiresIn:'1h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
