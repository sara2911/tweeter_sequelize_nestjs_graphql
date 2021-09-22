import { Field, ObjectType } from '@nestjs/graphql';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
@ObjectType()
@Table
export class Tweet extends Model<Tweet> {
  @Field()
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;
  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;
  @Field()
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
