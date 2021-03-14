import {Message} from "./";


export interface IUIDriver {
    get(request: String): Message;
}

