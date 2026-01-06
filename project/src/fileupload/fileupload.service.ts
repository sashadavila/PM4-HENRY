import { Injectable, NotFoundException } from '@nestjs/common';
import { FileuploadRepositpry } from './fileuploadrepositori';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileuploadService {
    constructor(  private readonly fileloadRepository : FileuploadRepositpry,
        @InjectRepository(Products) private readonly productsRepository: Repository<Products>
    ){}


     async uploadimage (file: Express.Multer.File, productId: string){
        const product = await this.productsRepository.findOneBy({ id: productId});
        
        if (!product){
            throw new NotFoundException('product not found')
        }


        const uploadResponse = await this.fileloadRepository.uploadimage(file);

        await this.productsRepository.update(product.id,
    { imgUrl: uploadResponse.secure_url,
    });

        return await this.productsRepository.findOneBy({id: productId});
    }

}
