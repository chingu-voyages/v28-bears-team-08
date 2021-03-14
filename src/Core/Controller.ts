import {View} from "../Modules/View";
import {DataModel} from "../Modules/DataModel";
import {SecurityManager} from "./SecurityManager";
import {Broker} from "../Interfaces/Broker";
import {DAO} from "./DAO";


export interface Controller {
    broker: Broker;
    securityManager: SecurityManager;
    dao: DAO;
    views: Array<View>;

    receiveModuleConfig(views: Array<View>, roles: Array<String>, dataModels: Array<DataModel>): void;

    requestData(): Response;
}

export class ControllerImpl {

    static init() {
        console.log("testing controller")
    }
}
