import { UserFollower } from './../user-follower/entities/user-follower.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as jwt from 'jsonwebtoken' 
import * as bcrypt from 'bcrypt';
import { AuthoDto } from './dto/AuthoDto';
import { Tweet } from 'src/tweets/entities/tweet.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository:typeof User,
  ) {}
 async createUser(createUserInput: CreateUserInput):Promise<User>  {
    let newUser=new User();
    let dataSaved: any;
    // newUser.gender=createUserInput.gender;
      newUser.name=createUserInput.name;
      newUser.email=createUserInput.email;
      newUser.salt= await bcrypt.genSalt();
      const pass= createUserInput.password
      newUser.password=await this.hashPassword(pass, newUser.salt);
    return newUser.save()
    .then((data) => {
      dataSaved = data;
      return dataSaved.dataValues;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  findAll():Promise<User[]> {
    return this.userRepository.findAll<User>({include:[Tweet,UserFollower]});
    ({include:[Tweet,UserFollower]})
                                            //  include:[UserFollower]})
      // {relations:["tweets"]});
  }

 async findOneUserById(id: string):Promise<User> {
    return await this.userRepository.findOne<User>({where:{userId:id},include:[Tweet,UserFollower]})
      ;
    }

async  findOneByEmail(Email: string): Promise<User> {
     const obj=await this.userRepository.findOne<User>({ where:{email:Email},include:[Tweet,UserFollower]})
     if( obj==null)
     {
    return null
     }
  else{
  return  obj
  }
  }

  ///////////////////
  async validateUser(AuthoDto:AuthoDto):Promise<any>{
    const _User= await this.findOneByEmail(AuthoDto.email)

    if(_User&& _User.validatePassword(AuthoDto.password)){
      return this.createToken(_User.email)
    }

    
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async createToken(email:string){
    console.log(email,"email");
  // let  payload:{} ={email};
  const accessToken=await jwt.sign(email,'secret');
 console.log(accessToken)
  return  accessToken ;
  }
}
