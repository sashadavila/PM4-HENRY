import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { Products } from 'src/products/entities/product.entity';
import { Orders } from './entities/order.entity';
import { Orderdetails } from './entities/ordersdetails.entity';
import { asyncWrapProviders } from 'async_hooks';
import { error } from 'console';

@Injectable()
export class OrdersService {
  constructor( @InjectRepository(Users)
private readonly usersRepository: Repository<Users>,
@InjectRepository(Products)
private readonly productsRespository: Repository<Products>,
@InjectRepository(Orders)
private readonly ordersRespository: Repository<Orders>,
@InjectRepository(Orderdetails)
private readonly orderDetailsRespository: Repository<Orderdetails>,
) {}
  async create(createOrderDto: CreateOrderDto) {
    const user: Users | null = await this.usersRepository.findOneBy({
      id: createOrderDto.userId,
    });

    if(!user) throw new NotFoundException('usuario no existe ');
    const order=new Orders();
    order.date=new Date();
    order.user= user;

    const newOrder:Orders =await this.ordersRespository.save(order)

    let total= 0;

    
    const ProductsArray: Products[]= await Promise.all(
      createOrderDto.products.map(async (element) => {
        const product: Products | null =
          await this.productsRespository.findOneBy({
            id: element?.id,
        });
        if (!product) {
          throw new Error();
        }

        total += Number(product.price);

        await this.productsRespository.update(
          { id: product.id },
          { stock: product.stock - 1 },
        );
        return product;
      }),
    );
    const orderDetail = new Orderdetails();
    orderDetail.price = Number(total.toFixed(2));
    orderDetail.products = ProductsArray;
    orderDetail.order = newOrder;

    await this.orderDetailsRespository.save(orderDetail);

  return await this.ordersRespository.find({
    where:{id: newOrder.id },
    relations:{
      orderdetails : true,
    },
  });

  }

    async findOne ( id: string) {
      const order: Orders | null = await this.ordersRespository.findOne({
        where: { id },
      relations: {
      orderdetails: {
          products: true,
         },
        },
      });
      if (!order){
      throw new Error();

      }
    return order;
  }
/* 
  findAll() {
    return `This action returns all orders`;
  }


  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  } */
}
