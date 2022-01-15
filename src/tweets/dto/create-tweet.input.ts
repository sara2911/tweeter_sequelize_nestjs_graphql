import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateTweetInput {
  @IsString()
  @Field()
  userId: string;

  @IsString()
@Field()
content:string;

}
