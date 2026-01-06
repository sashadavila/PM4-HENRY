"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../products/entities/product.entity");
const order_entity_1 = require("./entities/order.entity");
const ordersdetails_entity_1 = require("./entities/ordersdetails.entity");
let OrdersService = class OrdersService {
    usersRepository;
    productsRespository;
    ordersRespository;
    orderDetailsRespository;
    constructor(usersRepository, productsRespository, ordersRespository, orderDetailsRespository) {
        this.usersRepository = usersRepository;
        this.productsRespository = productsRespository;
        this.ordersRespository = ordersRespository;
        this.orderDetailsRespository = orderDetailsRespository;
    }
    async create(createOrderDto) {
        const user = await this.usersRepository.findOneBy({
            id: createOrderDto.userId,
        });
        if (!user)
            throw new common_1.NotFoundException('usuario no existe ');
        const order = new order_entity_1.Orders();
        order.date = new Date();
        order.user = user;
        const newOrder = await this.ordersRespository.save(order);
        let total = 0;
        const ProductsArray = await Promise.all(createOrderDto.products.map(async (element) => {
            const product = await this.productsRespository.findOneBy({
                id: element?.id,
            });
            if (!product) {
                throw new Error();
            }
            total += Number(product.price);
            await this.productsRespository.update({ id: product.id }, { stock: product.stock - 1 });
            return product;
        }));
        const orderDetail = new ordersdetails_entity_1.Orderdetails();
        orderDetail.price = Number(total.toFixed(2));
        orderDetail.products = ProductsArray;
        orderDetail.order = newOrder;
        await this.orderDetailsRespository.save(orderDetail);
        return await this.ordersRespository.find({
            where: { id: newOrder.id },
            relations: {
                orderdetails: true,
            },
        });
    }
    async findOne(id) {
        const order = await this.ordersRespository.findOne({
            where: { id },
            relations: {
                orderdetails: {
                    products: true,
                },
            },
        });
        if (!order) {
            throw new Error();
        }
        return order;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __param(2, (0, typeorm_1.InjectRepository)(order_entity_1.Orders)),
    __param(3, (0, typeorm_1.InjectRepository)(ordersdetails_entity_1.Orderdetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map