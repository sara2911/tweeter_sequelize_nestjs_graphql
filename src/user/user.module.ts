import { Tweet } from './../tweet/entities/tweet.entity';
import { TweetModule } from './../tweet/tweet.module';
import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserProviders } from './user.providers';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule, forwardRef(() => Tweet)],
  providers: [UserResolver, UserService, ...UserProviders],
  exports: [UserService],
})
export class UserModule {}
