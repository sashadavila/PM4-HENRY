import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jtwService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    const authentication = request.headers['authorization'];
    
    if (!authentication) return false;
    const  token: string = authentication.split(' ')[1];

    if(!token) return false;

    const secret = process.env.JWT_SECRET;

    try {
      const user  = this.jtwService.verify(token , {secret});

      user.exp = new Date(user.exp * 10000);
      user.iat = new Date(user.iat * 10000);
      
      if (user.isAdmin){
        user.roles = [Role.Admin];

      }else{
        user.roles = [Role.User];
      }

      request.user = user;

      return true;
      
    } catch (error) {
      console.log(error);
      return false;
    }




    return true;
  }
}
