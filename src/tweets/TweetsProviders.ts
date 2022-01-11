import { Tweet } from './entities/tweet.entity';

export const TweetProviders = [
  {
    provide: 'Tweet_REPOSITORY',
    useValue: Tweet,
  },
];