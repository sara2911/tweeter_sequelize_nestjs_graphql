import { UserFollower } from "./entities/user-follower.entity";

export const FolowerProviders = [
    {
      provide: 'follower_REPOSITORY',
      useValue: UserFollower,
    },
  ];