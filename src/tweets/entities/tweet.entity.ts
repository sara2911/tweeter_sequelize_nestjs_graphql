import { ObjectType, Field, } from '@nestjs/graphql';
import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasOne } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Table
export class Tweet extends Model<Tweet> {
  @Field()
  @Column({
      type: DataType.UUID,
      allowNull: false,
      defaultValue: DataType.UUIDV4,
      primaryKey: true,
  })
  id:String;
  
  @Field()
  @Column({type: DataType.STRING})
    content:string;

    @Field(()=>String)
    @ForeignKey(() => User)
    @Column({ type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false})
      userId:string;
  
 @BelongsTo(() => User)
   @Field(()=> User)
    user: User;


// @HasOne(()=>User,{foreignKey:'userId',constraints: false})
// user:User;
 
}
