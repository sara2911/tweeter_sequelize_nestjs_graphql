import { Module } from '@nestjs/common';
import { UserFollowingService } from './user-following.service';
import { UserFollowingResolver } from './user-following.resolver';

@Module({
  providers: [UserFollowingResolver, UserFollowingService]
})
export class UserFollowingModule {}
