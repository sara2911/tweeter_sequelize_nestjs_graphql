import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserFollowingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
