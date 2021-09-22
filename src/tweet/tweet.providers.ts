import { Tweet } from 'src/tweet/entities/tweet.entity';
export const TweetProviders = [
  {
    provide: 'Tweets_REPOSITORY',
    useValue: Tweet,
  },
];
