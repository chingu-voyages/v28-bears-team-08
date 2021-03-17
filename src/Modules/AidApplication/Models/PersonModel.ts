import { DataModel } from "../../DataModel";
import { Schema } from "mongoose";

// TODO move this to ModelManager
export class PersonModel implements DataModel {
  typeName: String = "person";
  model: Schema;

  constructor() {
    this.model = new Schema({
      firstName: String,
      lastName: String,
      dateOfBirth: Date,
      tin: String,
      gender: {
        type: String,
        // example of possible programmatic validation - probably better to just have it in FE and DB
        match: new RegExp("(\\bmale\\b)|(\\bfemale\\b)|(\\bdeclined\\b)"),
      },
      race: String,
      ethnicity: String,
      education: String,
      income: {
        has: Boolean,
        monthly: Number,
      },
    });
  }
}
