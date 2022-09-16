import {
  MONGO_URI,
  MONGODB_USER,
  MONGODB_PASS,
  MONGODB_DATABASE_NAME,
} from '../config';

import * as mongoose from 'mongoose';

export const connect = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        user: MONGODB_USER,
        pass: MONGODB_PASS,
        dbName: MONGODB_DATABASE_NAME,
      })
      .then(() => {
        resolve('We Are connected to ' + MONGO_URI + ' ...');
      })
      .catch((e) => reject(e));
  });
};
export const close = () => {
  mongoose.connection.close();
};
