import * as mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const connect = async () => {
  const mongoServer = new MongoMemoryServer();
  const MONGO_TEST_URI = await mongoServer.getUri();
  const opts = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    await mongoose.connect(MONGO_TEST_URI, opts);
    console.log('We Are connected to ' + MONGO_TEST_URI + ' ...');
  } catch (error) {
    console.error(error);
  }
  return mongoServer;
};
export const close = () => {
  mongoose.connection.close();
};
