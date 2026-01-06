import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    getUsers(page?: number, limit?: number): Promise<Users[]>;
}
