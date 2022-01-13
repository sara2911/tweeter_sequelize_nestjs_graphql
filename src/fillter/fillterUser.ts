import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class fillterUser{
    @Field()
    limit?:number;
    @Field()
    offsit?:number;
}