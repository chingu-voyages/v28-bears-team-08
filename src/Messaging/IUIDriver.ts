import {Message} from "./";
import {Observer} from "rxjs";


export interface IUIDriver extends Observer<Message> {
    get(request: Message | String): Message;
}

