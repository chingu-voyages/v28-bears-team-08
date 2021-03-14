import {Controller} from "../Core/Controller";
import {AppModule} from "../Modules/AppModule";

export interface Message {
    from: unknown;
    to: unknown;
    request: String;
    response: Promise<any>;
}

export interface Response extends Message {
}

export interface BrokerMessage extends Message {
    from: Controller | AppModule;
    to: Controller | AppModule;
}
