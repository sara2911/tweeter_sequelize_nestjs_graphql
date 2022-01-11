import { UsersModule } from './../users/users.module';
import { TweetProviders } from './TweetsProviders';
import { forwardRef, Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsResolver } from './tweets.resolver';
import { DatabaseModule } from 'src/database/DatabaseModule';

@Module({
  imports:[DatabaseModule,forwardRef(() =>UsersModule)],
  providers: [TweetsResolver, TweetsService,...TweetProviders],
  exports:[TweetsService]
})
export class TweetsModule {}
