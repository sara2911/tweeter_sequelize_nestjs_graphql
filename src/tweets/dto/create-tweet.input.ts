import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTweetInput {
  @Field(() => String)
  userId: string;
@Field()
content:string;

}
