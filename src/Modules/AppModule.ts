import {View} from "./View";
import {DataModel} from "./DataModel";

export interface AppModule {
    roleList: Array<String>;
    views: Array<View>;
    models: Array<DataModel>;
}
