import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Orders } from "./order.entity";
import { Products} from "src/products/entities/product.entity";

@Entity({
    name:'ORDER_DETAILS',
})

export class Orderdetails{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:'decimal',
        precision:10,
        scale:2,
    })
    price:number;

    @OneToOne (()=> Orders,(order)=> order.orderdetails)
    @JoinColumn({name: 'order_id'})
    order:Orders;

    @ManyToMany (()=>Products)
    @JoinTable({
        name:'ORDER_DETAILS_PRODUCTS',
    })
    products: Products[];
}