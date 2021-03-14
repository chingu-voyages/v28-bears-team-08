import {Observer} from "rxjs";
import {Message} from "../Messaging";

export interface ISecurityManager extends Observer<Message>{
    roles: Array<String>;

    registerRoles(roles: Array<String>): void;
}

