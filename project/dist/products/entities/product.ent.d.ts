export interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imgUrl: string;
}
export declare class ProductsRepository {
    private products;
    getProducts(): Products[];
}
