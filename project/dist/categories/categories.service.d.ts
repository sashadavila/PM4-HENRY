import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoriesService {
    private readonly categoriesRespoitory;
    constructor(categoriesRespoitory: Repository<Category>);
    Seeder(): Promise<string>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
}
