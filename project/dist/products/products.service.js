"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const data_json_1 = __importDefault(require("../data.json"));
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../categories/entities/category.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    CategoriesRepository;
    ProductsRepository;
    constructor(CategoriesRepository, ProductsRepository) {
        this.CategoriesRepository = CategoriesRepository;
        this.ProductsRepository = ProductsRepository;
    }
    async seeder() {
        const categories = await this.CategoriesRepository.find();
        const newProducts = data_json_1.default.map((product) => {
            const category = categories.find((Category) => product.category === Category.name);
            const newProducts = new product_entity_1.Products();
            newProducts.name = product.name;
            newProducts.description = product.description;
            newProducts.price = product.price;
            newProducts.imgUrl = product['imgUrl'] ?? 'no image';
            newProducts.stock = product.stock;
            newProducts.category = category;
            return newProducts;
        });
        await this.ProductsRepository.upsert(newProducts, ['name']);
        return 'products added';
    }
    async getProducts(page, limit) {
        let products = await this.ProductsRepository.find();
        const start = (page - 1) * limit;
        const end = start + +limit;
        products = products.slice(start, end);
        return products;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map