import { Injectable ,BadRequestException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)  private usersRepository:Repository<Users>,
    private readonly jwtService : JwtService,
) {}
    
    
        async register( user: CreateUserDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {confirmPassword , ...userWithoutPassword} = user


  const findUser = await this.usersRepository.findOneBy({
    email: user.email,
  });//fijarse si el usuario ya existe 
  if (findUser) throw new BadRequestException('usuarioya existe');

  //encriptar la contraseña
   const hashedPassword = await bcrypt.hash(user.password, 10)

  const newUser =   this.usersRepository.create({
    ...userWithoutPassword ,
    password:hashedPassword , 
        });
 return await this.usersRepository.save(newUser);
    }


    async singIn(credentials : LoginDto){
        const findUser :Users|null= await this.usersRepository.findOneBy({
            email: credentials.email,
        });
        if (!findUser) throw new BadRequestException(' bad credentials');

        const matchPassword =await bcrypt.compare(
            credentials.password,
            findUser.password,
        );
        if (!matchPassword) throw new BadRequestException('bad credentials');

        const payload ={
            id: findUser.id,
            email:findUser.email,
            isAdmin: findUser.isAdmin,
        }

        const token = this.jwtService.sign(payload);
        return { access_token: token};
    }
}
