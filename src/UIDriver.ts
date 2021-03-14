import {IUIDriver} from "./Messaging";
import { Message } from "./Messaging";

class UIDriver implements IUIDriver {
    get(request: Message): Message {
        return {
            from: "driver",
            to: "ui",
            request: request,
            response: request.response
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
