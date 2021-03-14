import {Message} from "./Message";
import {DataModel} from "../Modules/DataModel";

export interface UIDriver {
    get(request: String): Message;
    post(request: String): Message;

    // should return item of type DataModel
    getDataModel(modelType: String, key?: String): DataModel;
}

