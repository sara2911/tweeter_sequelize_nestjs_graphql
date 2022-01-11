import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserFollowerInput {
  @Field()
  followeeId:string;
  @Field()
  followerId:string;
}
