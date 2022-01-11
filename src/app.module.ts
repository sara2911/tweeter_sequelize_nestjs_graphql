import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserFollowerModule } from './user-follower/user-follower.module';
import { TweetsModule } from './tweets/tweets.module';
import { UserFollowingModule } from './user-following/user-following.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    UsersModule,
    forwardRef(() => TweetsModule),
    // SequelizeModule.forRoot({
    //   autoLoadModels: true,
    //   synchronize: true,
    // }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ headers: req.headers }),

      // typePaths: ['./**/*.graphql'],
      // // definitions: {
      // //   path: join(process.cwd(), 'src/graphql.ts'),
      // // },
      // autoSchemaFile: 'Schema.gql',
    }),
    UserFollowerModule,
    UserFollowingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
