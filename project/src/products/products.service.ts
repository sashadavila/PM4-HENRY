import { Injectable } from '@nestjs/common';
import data from '../data.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';
import { Products } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Category)
    private readonly CategoriesRepository: Repository<Category>,
    @InjectRepository(Products)
    private readonly ProductsRepository: Repository<Products>,
  ) {}

  async seeder() {
    const categories: Category[] = await this.CategoriesRepository.find();


    const newProducts: Products[]= data.map((product)=>{
      const category: Category | undefined = categories.find(
        (Category)=> product.category === Category.name);
      
      const newProducts = new Products();
      newProducts.name = product.name;
      newProducts.description = product.description;
      newProducts.price = product.price;
      newProducts.imgUrl =product['imgUrl'] ?? 'no image';
      newProducts.stock = product.stock;
      newProducts.category = category!;

      return newProducts;
      });
      await this.ProductsRepository.upsert(newProducts,['name']);
      return 'products added'
  }

  async getProducts(page:number,limit:number){
    let products: Products[]=await this.ProductsRepository.find();

    const start = (page -1) * limit;
    const end = start + + limit;

    products = products.slice(start, end);
    
    return products;
  }
  
  }
/* findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  } */
