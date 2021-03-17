import { Schema } from "mongoose";

export interface DataModel {
  typeName: String;
  model: Schema;
}
