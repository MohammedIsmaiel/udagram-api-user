import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': "udagram-db",
  'host': config.host,
  'dialect': config.dialect,
  'storage': ':memory:',
});
