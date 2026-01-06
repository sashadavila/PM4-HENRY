import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(page: string, limit: string): Promise<import("./entities/product.entity").Products[]>;
    seeder(): Promise<string>;
}
