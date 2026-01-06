import { Injectable } from "@nestjs/common";

export interface Products {
  id: number;

  name: string;
  description: string;
  price: number;
  stock: boolean;
  imgUrl: string;

}
@Injectable()
export class ProductsRepository {
  private products: Products[] = [
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

  getProducts(): Products[] {
    return this.products;
  };
}