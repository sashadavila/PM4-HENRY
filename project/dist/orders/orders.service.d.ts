import { CreateOrderDto } from './dto/create-order.dto';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { Products } from 'src/products/entities/product.entity';
import { Orders } from './entities/order.entity';
import { Orderdetails } from './entities/ordersdetails.entity';
export declare class OrdersService {
    private readonly usersRepository;
    private readonly productsRespository;
    private readonly ordersRespository;
    private readonly orderDetailsRespository;
    constructor(usersRepository: Repository<Users>, productsRespository: Repository<Products>, ordersRespository: Repository<Orders>, orderDetailsRespository: Repository<Orderdetails>);
    create(createOrderDto: CreateOrderDto): Promise<Orders[]>;
    findOne(id: string): Promise<Orders>;
}
