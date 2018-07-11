import mongoose from "mongoose";
import Promise from "bluebird";
import config from "../config/config";

export function init(): void {
  mongoose.Promise = Promise;
  mongoose.connect(
    `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.dbName}`,
    {useNewUrlParser: true}
  ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    },
  ).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  });
}