import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetResolver } from './tweet.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { TweetProviders } from './tweet.providers';

@Module({
  imports: [DatabaseModule, UserModule],

  providers: [TweetResolver, TweetService, ...TweetProviders],
})
export class TweetModule {}
