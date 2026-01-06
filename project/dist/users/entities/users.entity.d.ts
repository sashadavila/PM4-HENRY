import { Orders } from "src/orders/entities/order.entity";
export declare class Users {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    isAdmin: boolean;
    order: Orders[];
}
