import { User } from './../users/entities/user.entity';
import { UsersService } from './../users/users.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTweetInput } from './dto/create-tweet.input';
import { UpdateTweetInput } from './dto/update-tweet.input';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @Inject('Tweet_REPOSITORY')
    private readonly TweetRepository:typeof Tweet,
    private userService: UsersService,


  ){}
  create(createTweetInput: CreateTweetInput):Promise<Tweet> {
    console.log(createTweetInput);
 let newTweet= new Tweet();
 let dataSaved:any;
 newTweet.content = createTweetInput.content;
 newTweet.userId = createTweetInput.userId;
 return newTweet.save()
 .then((data) => {
  dataSaved = data;
  return dataSaved.dataValues;
})
.catch((error) => {
  console.log(error);
});
  }

  async GetUser(id: string): Promise<User> {

    return  await this.userService.findOneUserById(id);
  }

// async  getTweetsOfUser(UserId:string):Promise<Tweet[]>{
//     return await this.TweetRepository.findAll({where:{userId:UserId}})
//   }
  findAll() {
    return this.TweetRepository.findAll({include:[User],order:[['createdAt','ASC' ]]});
  }

  findOne(id: String) {
    return this.TweetRepository.findAll({order:['createdAt','ASC']});
  }

  update(id: number, updateTweetInput: UpdateTweetInput) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
