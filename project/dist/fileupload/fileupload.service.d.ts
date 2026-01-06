import { FileuploadRepositpry } from './fileuploadrepositori';
import { Products } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
export declare class FileuploadService {
    private readonly fileloadRepository;
    private readonly productsRepository;
    constructor(fileloadRepository: FileuploadRepositpry, productsRepository: Repository<Products>);
    uploadimage(file: Express.Multer.File, productId: string): Promise<Products | null>;
}
