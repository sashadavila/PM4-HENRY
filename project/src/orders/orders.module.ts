import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { Orders } from './entities/order.entity';
import { Orderdetails } from './entities/ordersdetails.entity';
import { Products } from 'src/products/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ Users, Orders , Orderdetails , Products])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
