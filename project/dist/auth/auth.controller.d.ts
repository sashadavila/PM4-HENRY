import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(user: CreateUserDto): Promise<import("../users/entities/users.entity").Users>;
    singIn(credentials: LoginDto): Promise<{
        access_token: string;
    }>;
}
