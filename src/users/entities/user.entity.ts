import { Tweet } from './../../tweets/entities/tweet.entity';
import { Field, ObjectType } from "@nestjs/graphql";
import { Table, Column, Model, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import * as bcrypt from 'bcrypt';
import { UserFollower } from 'src/user-follower/entities/user-follower.entity';

@ObjectType()
@Table
export class User extends Model<User>{
  @Field(()=>String)
  @Column({
      type: DataType.UUID,
      allowNull: false,
      defaultValue: DataType.UUIDV4,
      primaryKey: true,
  })
  userId:any;

  @Field()
  @Column(DataType.STRING)
  name: string;

  @Field()
  @Column({
    type: DataType.STRING,
    unique: true, allowNull: false
  })
  email: string;

  // @Field()
  // @Column({
  //     type: DataType.ENUM,
  //     values: ['male', 'female'],
  //     allowNull: false,
  // })
  // gender: string;
  @Field()
  @Column(DataType.STRING)
  salt: string;

  @Field()
  @Column(DataType.STRING)
  password: string;
  
// @Field(()=>[Tweet])
//   @BelongsToMany(() => Tweet, { as: 'tweets', through:'userId' })
//   tweets: Tweet[];


@HasMany(() =>Tweet)
@Field(()=>[Tweet])
Tweets:Tweet[];

@HasMany(() =>UserFollower)
@Field(()=>[UserFollower])
 followers:UserFollower[]

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

}

