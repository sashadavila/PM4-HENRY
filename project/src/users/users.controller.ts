import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/auth/roles.enum';
import { Roles} from 'src/decorators/roles.decorators'
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @ApiBearerAuth()
  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard,RolesGuard)
getUsers(@Query ('page') page: string, @Query('limit')
limit: string){
  if(limit && page){
    return this.usersService.getUsers(+page, +limit);
  }
  return this.usersService.getUsers();
}




/*   @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
 */

 /*  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
 */
/*   @Put(':id')
  update(@Body() user: Partial<User> ,@Param('id') id: string) {
    return this.usersService.update(+id, user);
  } */

/*   @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.Delete(+id);
  }
 */
/*   @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard , RolesGuard)
  promoveToAdmin(@Body() user: Partial<User> ,@Param('id') id: string) {
    return this.usersService.update(+id, user);
  }  */
}
