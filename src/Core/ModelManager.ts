import { Schema } from "mongoose";
import bunyan from "bunyan";
import Logger from "bunyan";

export class ModelManager {
  private static logger: Logger = bunyan.createLogger({name: "MODEL MANAGER", level: "trace"})
  private static readonly viewSchema = new Schema({
    name: String,
    view: {},
  });
  private static readonly roleSchema = new Schema({
    name: String,
  });
  private static readonly modelSchema = new Schema({
    name: String,
    model: Map,
  });
  private static readonly moduleSchema = new Schema({
    // the name of the module
    moduleName: String,
    // the relative or absolute path to the module's code on the server
    path: String,
    // whether the module should be run
    active: Boolean,
    // the views associated with this module
    views: [ModelManager.viewSchema],
    // the roles associated with this module
    roles: [ModelManager.roleSchema],
    // the data models associated with this module
    models: [ModelManager.modelSchema],
  });
  private static readonly userSchema = new Schema({
    firstName: String,
    lastName: String,
    roles: [String],
  });
  private static readonly personSchema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    tin: String,
    gender: String,
    race: String,
    ethnicity: String,
    education: String,
    income: new Schema({
      has: Boolean,
      monthly: Number,
    }),
  });

  static getSchemas(): Array<Schema> {
    const schemas: Array<Schema> = [];

    schemas.push(ModelManager.view);
    schemas.push(ModelManager.role);
    schemas.push(ModelManager.model);
    schemas.push(ModelManager.module);
    schemas.push(ModelManager.user);
    schemas.push(ModelManager.person);

    ModelManager.logger.info("schemas build successfully")

    return schemas;
  }

  static get model(): Schema {
    return ModelManager.modelSchema;
  }

  static get view(): Schema {
    return ModelManager.viewSchema;
  }

  static get role(): Schema {
    return ModelManager.roleSchema;
  }

  static get module(): Schema {
    return ModelManager.moduleSchema;
  }

  static get user(): Schema {
    return ModelManager.userSchema;
  }

  static get person(): Schema {
    return ModelManager.personSchema;
  }
}
