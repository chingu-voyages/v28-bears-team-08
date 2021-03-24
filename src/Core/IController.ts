import { Observer } from "rxjs";

import { Message } from "../Messaging";
import { ModuleBroker } from "../Messaging";

import { View, DataModel } from "../Modules";

export interface IController extends Observer<Message> {
  modBroker: ModuleBroker;
  views: Map<string, View>;

  receiveModuleConfig(
    views: Array<View>,
    roles: Array<String>,
    dataModels: Array<DataModel>
  ): void;
}
