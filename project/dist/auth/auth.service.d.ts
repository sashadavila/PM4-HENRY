import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersRepository;
    private readonly jwtService;
    constructor(usersRepository: Repository<Users>, jwtService: JwtService);
    register(user: CreateUserDto): Promise<Users>;
    singIn(credentials: LoginDto): Promise<{
        access_token: string;
    }>;
}
