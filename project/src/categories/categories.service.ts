import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { from } from 'rxjs';

import { Products } from 'src/products/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import data from '../data.json';
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRespoitory: Repository<Category>,
  ) {}
  
  async Seeder() {

  

    const categoryName: Set<string> = new Set(
      //eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return
      data.map((Product) => Product.category),
    );
    const categoriesArray: string[] = Array.from(categoryName);

    const categories = categoriesArray.map((category) => ({ name: category }));

    await this.categoriesRespoitory.upsert(categories, ['name']);

    return 'categorias added';
  }


   async findAll(): Promise<Category[]> {
    return await this.categoriesRespoitory.find();
  }
  

 async findOne(id: string): Promise<Category> {
    const category = await this.categoriesRespoitory.findOne({
      where: { id },
      relations: ['products'], // si querés incluir los productos de la categoría
    });

    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }

    return category;
  }


}
