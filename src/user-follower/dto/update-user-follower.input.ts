import { CreateUserFollowerInput } from './create-user-follower.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserFollowerInput extends PartialType(CreateUserFollowerInput) {
  @Field(() => Int)
  id: number;
}
