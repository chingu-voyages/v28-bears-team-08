import { View, DataModel } from "./";

export interface AppModule {
  roleList: Array<String>;
  views: Array<View>;
  models: Array<DataModel>;
}
