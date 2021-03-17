import { AppModule } from "../AppModule";
import { View } from "../View";
import { DataModel } from "../DataModel";

export class AidApplicationController implements AppModule {
  roleList: Array<String>;
  views: Array<View>;
  models: Array<DataModel>;

  constructor() {
    this.roleList = new Array<String>();
    this.views = new Array<View>();
    this.models = new Array<DataModel>();
  }
}
