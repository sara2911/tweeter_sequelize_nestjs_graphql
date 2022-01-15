import { fillterUser } from './../fillter/fillterUser';
import { Fillter } from './../fillter/fillterTweets';
import { TweetsService } from './../tweets/tweets.service';
import { AuthoDto } from './dto/AuthoDto';
import { User } from './entities/user.entity';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { AuthGuard } from './AuthGuard';
import { UseGuards } from '@nestjs/common';
import { Tweet } from 'src/tweets/entities/tweet.entity';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService,
    private readonly TweetsService:TweetsService) {}

  @Mutation(returns=>User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  // @Mutation(returns=>User)
  // async Login(@Args('AuthoDto') AuthoDto:AuthoDto) {
  //   return this.usersService.validateUser(AuthoDto)
  // }




   @Mutation(()=>String)
  async Login(@Args('AuthoDto') AuthoDto:AuthoDto) {
     let  userFound= await this.usersService.findOneByEmail(AuthoDto.email)
     if(!userFound){
       throw "this email not found"
     }
     if(userFound&& userFound.validatePassword(AuthoDto.password) ){
      return  this.usersService.createToken(userFound.email)
     }
     else throw "password not correct"
    }


  @Query(returns=>[User])
  @UseGuards(new AuthGuard())
  async findAll
  (@Context('user') User :User,@Args('fillterInput')! fillter :fillterUser ):Promise<User[]> {
    return this.usersService.findAll(fillter.limit,fillter.offsit);
  }

@Query(returns=>User)
FindOneUserbyEmail(@Args('input') email:string):Promise<User>{
  return this.usersService.findOneByEmail(email);
}
 
}
