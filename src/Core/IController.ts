import {Observer} from "rxjs";

import {ISecurityManager, IDAO} from "./";

import {BrokerMessage, Message} from "../Messaging";
import {ModuleBroker} from "../Messaging";

import {View, DataModel} from "../Modules";


export interface IController extends Observer<Message>{
    modBroker: ModuleBroker;
    securityManager: ISecurityManager;
    dao: IDAO;
    views: Array<View>;

    receiveModuleConfig(views: Array<View>, roles: Array<String>, dataModels: Array<DataModel>): void;

    requestData(request: Message): Message;
}
