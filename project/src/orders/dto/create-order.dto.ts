import { IsNotEmpty, IsUUID, ArrayMinSize } from 'class-validator';

export class CreateOrderDto {

    @IsNotEmpty()
    @IsUUID()
    userId: string;


     @ArrayMinSize(1)
    products:{id:string}[];
}
