import { Category } from "src/categories/entities/category.entity";
import { Orderdetails } from "src/orders/entities/ordersdetails.entity";
export declare class Products {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl?: string;
    orderdetails: Orderdetails[];
    category: Category;
}
