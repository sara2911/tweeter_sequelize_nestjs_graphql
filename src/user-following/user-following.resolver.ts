import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserFollowingService } from './user-following.service';
import { UserFollowing } from './entities/user-following.entity';
import { CreateUserFollowingInput } from './dto/create-user-following.input';
import { UpdateUserFollowingInput } from './dto/update-user-following.input';

@Resolver(() => UserFollowing)
export class UserFollowingResolver {
  constructor(private readonly userFollowingService: UserFollowingService) {}

  @Mutation(() => UserFollowing)
  createUserFollowing(@Args('Input') createUserFollowingInput: CreateUserFollowingInput) {
    return this.userFollowingService.create(createUserFollowingInput);
  }

  @Query(() => [UserFollowing], { name: 'userFollowing' })
  findAll() {
    return this.userFollowingService.findAll();
  }

  @Query(() => UserFollowing, { name: 'userFollowing' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userFollowingService.findOne(id);
  }

  @Mutation(() => UserFollowing)
  updateUserFollowing(@Args('updateUserFollowingInput') updateUserFollowingInput: UpdateUserFollowingInput) {
    return this.userFollowingService.update(updateUserFollowingInput.id, updateUserFollowingInput);
  }

  @Mutation(() => UserFollowing)
  removeUserFollowing(@Args('id', { type: () => Int }) id: number) {
    return this.userFollowingService.remove(id);
  }
}
