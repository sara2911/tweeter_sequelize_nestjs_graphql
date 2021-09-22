import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TweetService } from './tweet.service';
import { CreateTweetInput } from './dto/create-tweet.input';
import { UpdateTweetInput } from './dto/update-tweet.input';
import { Tweet } from './entities/tweet.entity';
import { User } from 'src/user/entities/user.entity';
@Resolver(() => Tweet)
export class TweetResolver {
  constructor(private readonly tweetService: TweetService) {}

  @Mutation(() => Tweet)
  create(
    @Args('createTweetInput') createTweetInput: CreateTweetInput,
  ): Promise<Tweet> {
    return this.tweetService.createTweet(createTweetInput);
  }
  @ResolveField(() => User)
  User(@Parent() tweet: Tweet): Promise<User> {
    return this.tweetService.GetUser(tweet.userId);
  }

  // @Query(() => Tweet)
  // findAll() {
  //   return this.tweetService.findAll();
  // }

  // @Query('tweet')
  // findOne(@Args('id') id: number) {
  //   return this.tweetService.findOne(id);
  // }

  // @Mutation('updateTweet')
  // update(@Args('updateTweetInput') updateTweetInput: UpdateTweetInput) {
  //   return this.tweetService.update(updateTweetInput.id, updateTweetInput);
  // }

  // @Mutation('removeTweet')
  // remove(@Args('id') id: number) {
  //   return this.tweetService.remove(id);
  // }
}
