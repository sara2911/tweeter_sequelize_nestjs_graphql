import { UserService } from 'src/user/user.service';
import { Tweet } from 'src/tweet/entities/tweet.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTweetInput } from './dto/create-tweet.input';
import { UpdateTweetInput } from './dto/update-tweet.input';
import { User } from 'src/user/entities/user.entity';
@Injectable()
export class TweetService {
  constructor(
    @Inject('Tweets_REPOSITORY') private Tweet_REPOSITORY: typeof Tweet,
    private userService: UserService,
  ) {}
  async createTweet(createTweetInput: CreateTweetInput): Promise<Tweet> {
    let dataSaved: any;

    const newTweet = new Tweet();
    newTweet.content = createTweetInput.content;
    newTweet.userId = createTweetInput.userId;
    return newTweet
      .save()
      .then((data) => {
        dataSaved = data;
        return dataSaved.dataValues;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async GetUser(id: string): Promise<User> {
    return this.userService.findOneUserById(id);
  }

  findAll() {
    return `This action returns all tweet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetInput: UpdateTweetInput) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
