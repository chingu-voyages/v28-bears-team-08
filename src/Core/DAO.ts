import mongoose, { Connection, Model, Mongoose, Schema } from "mongoose";

import { IDAO } from "./";
import { DataModel } from "../Modules";
import { Message } from "../Messaging";
import { ModelManager } from "./ModelManager";

require("dotenv").config();

export class DAO implements IDAO {
  private static instance: DAO;
  private mongoose: Mongoose;
  private db: Connection;
  private schemas: Array<Schema>;

  dataModels: Array<DataModel>;

  private constructor() {
    this.dataModels = new Array<DataModel>();
    this.mongoose = mongoose;

    // Connect to Mongo
    this.connect();
    this.db = mongoose.connection;
    this.db.on("error", console.error.bind(console, "connection error:"));
    this.db.once("open", () => {
      console.log("Connection to database successful.");
    });

    // Build schemas
    this.schemas = ModelManager.getSchemas();
  }

  static get getInstance(): DAO {
    if (!this.instance) {
      this.init();
    }
    return this.instance;
  }

  /* Initialization Methods */
  static init() {
    this.instance = new DAO();
  }

  // TODO this needs proper error checking & logging
  private connect(): void {
    const { CONNECTION_STRING } = process.env;
    if (CONNECTION_STRING) {
      mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  }

  /* Observer Methods */
  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {}
}

export enum QueryType {
  deleteMany,
  deleteOne,
  find,
  findById,
  findByIdAndDelete,
  findByIdAndRemove,
  findByIdAndUpdate,
  findOne,
  findOneAndDelete,
  findOneAndRemove,
  findOneAndUpdate,
  replaceOne,
  updateMany,
  updateOne,
}
