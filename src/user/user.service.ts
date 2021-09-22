import { Injectable, Inject } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @Inject('Users_REPOSITORY')
    private User_REPOSITORY: typeof User,
  ) {}
  async findAll(): Promise<User[]> {
    return this.User_REPOSITORY.findAll<User>();
  }
  async create(createUserDto: CreateUserInput): Promise<User> {
    const user = new User();
    let dataSaved: any;
    user.name = createUserDto.name;
    user.email = createUserDto.email;

    return user
      .save()
      .then((data) => {
        dataSaved = data;
        return dataSaved.dataValues;
      })
      .catch((error) => {
        console.log(error);
      });

    // update(id: number, updateUserInput: UpdateUserInput) {
    //   return `This action updates a #${id} user`;
    // }

    // remove(id: number) {
    //   return `This action removes a #${id} user`;
    // }
  }
  async findOneUserById(id: string): Promise<User> {
    return await this.User_REPOSITORY.findByPk(id);
    // .findOne<User>({ where: { id } });
  }
}
