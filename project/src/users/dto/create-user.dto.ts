
import { ApiProperty ,PickType } from "@nestjs/swagger";
import { IsEmail, isEmail, IsEmpty, IsNotEmpty, isNotEmpty, IsNumber, IsString, isString, MATCHES, Matches, matches, MaxLength, maxLength, MinLength, minLength, Validate } from "class-validator";
import { MatchPassword } from "src/helpers/matchPassword";

export class CreateUserDto { 
    
    @ApiProperty({
        example:'toto@gmail.com',
        description:'must to be a valid email'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(3)
    name: string;

        
    @ApiProperty({
        example:'password123',
    })
    @MinLength(8)
    @MaxLength(255)
    password: string;

    @Validate(MatchPassword,['password'])
    confirmPassword: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    @IsNotEmpty()

    phone: number;

    
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    country: string;

    
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    city: string;

    @IsEmpty()
    isAdmin?:boolean;
}


export class LoginDto extends PickType(CreateUserDto, ['password', 'email']) {}