import { BadRequestException, Delete, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';


@Injectable()

export class UsersService{
  constructor(@InjectRepository (Users) private readonly userRepository:Repository<Users>){}

async getUsers(page:number =1, limit:number =2):Promise<Users[]>{

  const users = await this.userRepository.find()

  const start =(page -1) * limit;
  const end = start + limit;

  
   return users.slice(start ,end);
}





/* async createUser( user: CreateUserDto) {
  const findUser = await this.userRepository.findOneBy({
    email: user.email,
  });
  if (findUser) throw new BadRequestException('usuarioya existe');

  const newUser =   this.userRepository.create(user);
 return await this.userRepository.save(newUser);
} */
}


  //findOne(id: number) {
    //return `This action returns a #${id} user`;
  //}/*  */
/* 
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
Delete (id :number) {
   return this.userRepository.remove(id);
 }

} */