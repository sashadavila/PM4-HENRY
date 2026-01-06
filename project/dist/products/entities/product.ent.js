"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    products = [
        {
            id: 1,
            name: "Laptop Gamer",
            description: "Laptop de alto rendimiento con tarjeta gráfica dedicada.",
            price: 1200,
            stock: true,
            imgUrl: "https://picsum.photos/200/300?random=1"
        },
        {
            id: 2,
            name: "Mouse Inalámbrico",
            description: "Mouse ergonómico con conexión Bluetooth.",
            price: 25,
            stock: true,
            imgUrl: "https://picsum.photos/200/300?random=2"
        },
        {
            id: 3,
            name: "Teclado Mecánico",
            description: "Teclado con switches mecánicos y retroiluminación RGB.",
            price: 75,
            stock: false,
            imgUrl: "https://picsum.photos/200/300?random=3"
        },
        {
            id: 4,
            name: "Auriculares",
            description: "Auriculares con cancelación de ruido y micrófono integrado.",
            price: 90,
            stock: true,
            imgUrl: "https://picsum.photos/200/300?random=4"
        },
        {
            id: 5,
            name: "Monitor 24''",
            description: "Monitor Full HD de 24 pulgadas con panel IPS.",
            price: 200,
            stock: true,
            imgUrl: "https://picsum.photos/200/300?random=5"
        }
    ];
    getProducts() {
        return this.products;
    }
    ;
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=product.ent.js.map