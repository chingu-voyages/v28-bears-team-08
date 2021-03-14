import {IUIDriver} from "./Interfaces/IUIDriver";
import { Message } from "./Interfaces/Message";
import { DataModel } from "./Modules/DataModel";

class UIDriver implements IUIDriver {
    get(request: String): Message {
        return {
            from: "driver",
            to: "ui",
            request: "a request",
        };
    }

/*    getDataModel(modelType: String, key?: String): DataModel {
        return undefined;
    }

    post(request: String): Message {
        return undefined;
    }*/

}

export const driver = new UIDriver();
