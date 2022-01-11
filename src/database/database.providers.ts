import { Tweet } from './../tweets/entities/tweet.entity';
import { User } from 'src/users/entities/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { UserFollower } from 'src/user-follower/entities/user-follower.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'Tweeter',
        
      });
      sequelize.addModels([User,Tweet,UserFollower]);
      // sequelize.addModels([Tweet]);

      // sequelize.addModels([User],
      //   // {Option:{freezeTableName: true}},
      //   );
      await sequelize.sync()
      // { force: true });
      return sequelize;
    },
  },
];