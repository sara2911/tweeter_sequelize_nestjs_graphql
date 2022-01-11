import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserFollowerService } from './user-follower.service';
import { UserFollower } from './entities/user-follower.entity';
import { CreateUserFollowerInput } from './dto/create-user-follower.input';
import { UpdateUserFollowerInput } from './dto/update-user-follower.input';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => UserFollower)
export class UserFollowerResolver {
  constructor(private readonly userFollowerService: UserFollowerService) {}

  @Mutation(() => UserFollower)
  createUserFollower(@Args('createUserFollowerInput') createUserFollowerInput: CreateUserFollowerInput) {
    return this.userFollowerService.addFollower(createUserFollowerInput);
  }

  @Query(() => [UserFollower], { name: 'userFollower' })
  findAll() {
    return this.userFollowerService.findAll();
  }


  @ResolveField(() => [User])
      async Followers(@Parent() UserFollower: UserFollower): Promise<User> {
    console.log(UserFollower.followerId,"id")
    return await this.userFollowerService.GetUser(UserFollower.followerId);
  }

  @Query(() => UserFollower, { name: 'userFollower' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userFollowerService.findOne(id);
  }

  @Mutation(() => UserFollower)
  updateUserFollower(@Args('updateUserFollowerInput') updateUserFollowerInput: UpdateUserFollowerInput) {
    return this.userFollowerService.update(updateUserFollowerInput.id, updateUserFollowerInput);
  }

  @Mutation(() => UserFollower)
  removeUserFollower(@Args('id', { type: () => Int }) id: number) {
    return this.userFollowerService.remove(id);
  }
}
