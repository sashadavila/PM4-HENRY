/* import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;
}
@Injectable()
export class UserRepository {
    private users: User[] = [
        {
            id: 1,
            email: "juan@example.com",
            name: "Juan Pérez",
            password: "123456",
            address: "Calle Falsa 123",
            phone: "+54 9 11 1234-5678",
            country: "Argentina",
            city: "Buenos Aires",
        },
        {
            id: 2,
            email: "maria@example.com",
            name: "María López",
            password: "abcdef",
            address: "Av. Siempre Viva 742",
            phone: "+54 9 223 555-6789",
            country: "Argentina",
            city: "Mar del Plata",
        },
        {
            id: 3,
            email: "carlos@example.com",
            name: "Carlos Gómez",
            password: "qwerty",
            address: "Ruta 2 km 45",
            phone: "+54 9 11 9999-8888",
            // country y city opcionales
        },
    ];

    getUsers(): User[] {
        return this.users;
    };

    save(user:CreateUserDto){
        const newUser :User ={
            id: this.users[this.users.length - 1].id + 1,
            ...user,
        }
        this.users.push(newUser);
    }

    remove (id:number){
    const filterUser = this.users.filter((user)=> user.id !== id);
        this.users = filterUser; 
        return 'user delete';
    }

    update(id:number, user:Partial<User>){
        const index =this.users.findIndex((user)=>user.id===id);
        if (index===-1){
            return'no hay tal';

        }
        this.users[index]=user as User;
    return user
    }
} */