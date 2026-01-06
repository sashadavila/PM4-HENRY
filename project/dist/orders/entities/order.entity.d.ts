import { Users } from "src/users/entities/users.entity";
import { Orderdetails } from "./ordersdetails.entity";
export declare class Orders {
    id: string;
    date: Date;
    user: Users;
    orderdetails: Orderdetails;
}
