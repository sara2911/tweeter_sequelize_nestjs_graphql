

import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength, ValidationArguments,  } from 'class-validator';

@InputType()
export class CreateUserInput {
    
    @Field()
    @IsString()
    name:string;
    @Field()
    @IsEmail()
    email:string;
   
    @Field()
    @MinLength(4,{message: (args: ValidationArguments) => {
        if (args.value.length === 1) {
          return 'Too short, minimum length is 1 character';
        } else {
          return 'Too short, minimum length is ' + args.constraints[0] + ' characters';
        }
    }})
    password:string;

}
