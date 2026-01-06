import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: string, limit: string): Promise<import("./entities/users.entity").Users[]>;
}
