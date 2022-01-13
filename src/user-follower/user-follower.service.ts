import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '../users/entities/user.entity';
import { CreateUserFollowerInput } from './dto/create-user-follower.input';
import { UpdateUserFollowerInput } from './dto/update-user-follower.input';
import { UserFollower } from './entities/user-follower.entity';

@Injectable()
export class UserFollowerService {
  
  constructor(
    @Inject('follower_REPOSITORY')
    private readonly TweetRepository:typeof UserFollower,
    private userService: UsersService,

  ){}

  addFollower(UserFollowerInput: CreateUserFollowerInput) {    let dataSaved: any;

    const newfollower= new UserFollower;
    newfollower.followerId=UserFollowerInput.followerId;
    newfollower.followeeId=UserFollowerInput.followeeId;
    return newfollower.save()
    .then((data) => {
      dataSaved = data;
      return dataSaved.dataValues;
    })
    .catch((error) => {
      console.log(error);
    });

  }

 async GetUser(followerId: string):Promise<User>|null {
    return  await this.userService.findOneUserById(followerId);
  }
  findAll() {
    return `This action returns all userFollower`;
  }
  // async Getfollowing(followerId:string,followeeId:string){
  // return await  this.userService
  // }

  findOne(id: number) {
    return `This action returns a #${id} userFollower`;
  }

  update(id: number, updateUserFollowerInput: UpdateUserFollowerInput) {
    return `This action updates a #${id} userFollower`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFollower`;
  }
}
