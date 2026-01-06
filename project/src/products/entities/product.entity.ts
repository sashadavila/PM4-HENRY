import { Category } from "src/categories/entities/category.entity";
import { Orderdetails } from "src/orders/entities/ordersdetails.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'PRODUCTS',
})

export class Products{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:'varchar',
        length:50,
        unique:true,

    })
    name:string;

    @Column({
        type:'text',

        nullable:false,

    })
    description :string;

    @Column({
        type:'decimal',
        precision:10,
        scale:2,
        nullable:false,
    })
    price:number;

    @Column({
        type:'int',
        nullable:false,
    })
    stock:number;

    @Column ({
        type:'text',
        default:'no image',
    })

    imgUrl?:string;

    @ManyToMany (()=> Orderdetails,(orderdetails) => orderdetails.products)
    orderdetails: Orderdetails[];

    @ManyToOne(()=>Category,(category)=> category.products)
    @JoinColumn({name: 'category_id'})
    category:Category;
}