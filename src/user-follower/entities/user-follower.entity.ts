import { ObjectType, Field } from '@nestjs/graphql';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Table
export class UserFollower extends Model<UserFollower> {
  @Field(() => String)
  @Column({ type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
           })
  id :string;

  @Field(()=>String)
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false})
    followeeId:any;
    // field:'followeeId'}
  
     @Field(()=>String)
    @ForeignKey(() => User)
     @Column({ type: DataType.UUID,defaultValue: DataType.UUIDV4,allowNull: false,unique: true})
       followerId:string;

       @Field(()=>User)
      @BelongsTo(()=>User,{as:"userId"})
      Followers: User;

      // @BelongsTo(() => User,{as:"userId"})
      // @Field(()=>User)
      // userInfo: User;

  //   @HasMany(() =>User)
  //  @Field(()=>[User])
  //   followers:User[]
  
}
