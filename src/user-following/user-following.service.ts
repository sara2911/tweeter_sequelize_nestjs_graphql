import { Injectable } from '@nestjs/common';
import { CreateUserFollowingInput } from './dto/create-user-following.input';
import { UpdateUserFollowingInput } from './dto/update-user-following.input';

@Injectable()
export class UserFollowingService {
  create(createUserFollowingInput: CreateUserFollowingInput) {
    return 'This action adds a new userFollowing';
  }

  findAll() {
    return `This action returns all userFollowing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userFollowing`;
  }

  update(id: number, updateUserFollowingInput: UpdateUserFollowingInput) {
    return `This action updates a #${id} userFollowing`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFollowing`;
  }
}
