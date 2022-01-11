import { CreateUserFollowingInput } from './create-user-following.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserFollowingInput extends PartialType(CreateUserFollowingInput) {
  @Field(() => Int)
  id: number;
}
