import { Users } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Orderdetails } from "./ordersdetails.entity";

@Entity({
    name:'ORDERS',
})
export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    date:Date;

    @ManyToOne (()=> Users , (user)=>user.order)
    @JoinColumn({ name:'user_id'})
    user:Users;

    @OneToOne(()=> Orderdetails,(orderdetails)=> orderdetails.order)
    orderdetails:Orderdetails;
}
