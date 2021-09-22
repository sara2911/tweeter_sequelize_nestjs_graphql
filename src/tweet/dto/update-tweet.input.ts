import { CreateTweetInput } from './create-tweet.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTweetInput extends PartialType(CreateTweetInput) {
  id: number;
}
