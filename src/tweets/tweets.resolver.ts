import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { TweetsService } from './tweets.service';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetInput } from './dto/create-tweet.input';
import { UpdateTweetInput } from './dto/update-tweet.input';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Tweet)
export class TweetsResolver {
  constructor(private readonly tweetsService: TweetsService) {}

  @Mutation(() => Tweet)
  createTweet(@Context('user')@Args('createTweetInput') createTweetInput: CreateTweetInput) {
    return this.tweetsService.create(createTweetInput);
  }

  @Query(() => [Tweet])
  findAllTweets() {
    return this.tweetsService.findAll();
  }

  @Query(() => Tweet, { name: 'tweet' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.tweetsService.findOne(id);
  }

  @ResolveField(() => User)
  async User(@Parent() tweet: Tweet): Promise<User> {
    // console.log(tweet.userId,"id")
    return await this.tweetsService.GetUser(tweet.userId);
  }
  @Mutation(() => Tweet)
  updateTweet(@Args('updateTweetInput') updateTweetInput: UpdateTweetInput) {
    return this.tweetsService.update(updateTweetInput.id, updateTweetInput);
  }

  @Mutation(() => Tweet)
  removeTweet(@Args('id', { type: () => Int }) id: number) {
    return this.tweetsService.remove(id);
  }
}
