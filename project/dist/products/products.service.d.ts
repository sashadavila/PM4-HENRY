import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';
import { Products } from './entities/product.entity';
export declare class ProductsService {
    private readonly CategoriesRepository;
    private readonly ProductsRepository;
    constructor(CategoriesRepository: Repository<Category>, ProductsRepository: Repository<Products>);
    seeder(): Promise<string>;
    getProducts(page: number, limit: number): Promise<Products[]>;
}
