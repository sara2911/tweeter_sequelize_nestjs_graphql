import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserFollowerModule } from './user-follower/user-follower.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    UsersModule,
     TweetsModule,
   
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ headers: req.headers }),

     
    }),
    UserFollowerModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
