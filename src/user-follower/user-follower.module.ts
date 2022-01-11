import { forwardRef, Module } from '@nestjs/common';
import { UserFollowerService } from './user-follower.service';
import { UserFollowerResolver } from './user-follower.resolver';
import { FolowerProviders } from './user-follower.providers';
import { DatabaseModule } from 'src/database/DatabaseModule';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[DatabaseModule,forwardRef(() =>UsersModule)],
  providers: [UserFollowerResolver, UserFollowerService,...FolowerProviders],
  exports:[UserFollowerService]
})
export class UserFollowerModule {}
