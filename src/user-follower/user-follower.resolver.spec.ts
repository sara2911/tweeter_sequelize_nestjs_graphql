import { Test, TestingModule } from '@nestjs/testing';
import { UserFollowerResolver } from './user-follower.resolver';
import { UserFollowerService } from './user-follower.service';

describe('UserFollowerResolver', () => {
  let resolver: UserFollowerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFollowerResolver, UserFollowerService],
    }).compile();

    resolver = module.get<UserFollowerResolver>(UserFollowerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
