import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() user: CreateUserDto) {
    return this.authService.register(user);
  }

  @Post('signin')
  singIn (@Body() credentials:LoginDto){
    return this.authService.singIn(credentials);
  }
}
