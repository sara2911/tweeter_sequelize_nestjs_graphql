import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTweetInput {
  @Field()
  readonly content: string;
  @Field()
  readonly userId: string;
}
