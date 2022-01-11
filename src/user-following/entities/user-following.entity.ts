import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserFollowing {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
