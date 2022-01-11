import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class AuthoDto{
    @Field()
    email:string;
    @Field()
    password: string;
}