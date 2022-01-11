import { Test, TestingModule } from '@nestjs/testing';
import { UserFollowingResolver } from './user-following.resolver';
import { UserFollowingService } from './user-following.service';

describe('UserFollowingResolver', () => {
  let resolver: UserFollowingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFollowingResolver, UserFollowingService],
    }).compile();

    resolver = module.get<UserFollowingResolver>(UserFollowingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
