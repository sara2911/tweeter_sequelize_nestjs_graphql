import { User } from './entities/user.entity';
export const UserProviders = [
  {
    provide: 'Users_REPOSITORY',
    useValue: User,
  },
];
