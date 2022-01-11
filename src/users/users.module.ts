import { UserFollowerModule } from './../user-follower/user-follower.module';
import { usersProviders } from './usersProviders';
import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { DatabaseModule } from 'src/database/DatabaseModule';
import { Tweet } from 'src/tweets/entities/tweet.entity';
import { TweetsModule } from 'src/tweets/tweets.module';

@Module({
  imports:[DatabaseModule,forwardRef(() => TweetsModule),forwardRef(() =>UserFollowerModule)],
  providers: [UsersResolver, UsersService,...usersProviders],
  exports:[UsersService]
})
export class UsersModule {}
