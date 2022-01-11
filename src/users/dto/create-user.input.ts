import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
@InputType()
export class CreateUserInput {
    
    @Field()
    @IsString()
    name:string;
    @Field()
    @IsEmail()
    email:string;
    // @Field()
    // gender: string;
    @Field()
    @MinLength(10, {
        message: 'Title is too short',})
    password:string;

}
