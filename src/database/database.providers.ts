import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
import { Tweet } from 'src/tweet/entities/tweet.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123456',
        database: 'tweeter_',
      });
      sequelize.addModels([User]);
      sequelize.addModels([Tweet]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
