import mongoose, { Connection, Mongoose, Schema } from "mongoose";
import bunyan from "bunyan";
import Logger from "bunyan";

import { IDAO } from "./";
import { DataModel } from "../Modules";
import { Message } from "../Messaging";
import { ModelManager } from "./ModelManager";
import { Controller } from "./Controller";

require("dotenv").config();

export class DAO implements IDAO {
  private static logger: Logger = bunyan.createLogger({
    name: "DAO",
    level: "trace",
  });
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
      DAO.logger.info("Connection to database successful.");
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
    } else {
      DAO.logger.fatal("mongoose failed to connect to the URI");
    }
  }

  /* Observer Methods */
  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {}
}
