import { Orders } from "./order.entity";
import { Products } from "src/products/entities/product.entity";
export declare class Orderdetails {
    id: string;
    price: number;
    order: Orders;
    products: Products[];
}
