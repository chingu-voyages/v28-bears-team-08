import {Observer} from "rxjs";

import {Message} from "../Messaging";

import {DataModel} from "../Modules";

export interface IDAO extends Observer<Message>{
    dataModels: Array<DataModel>

    registerDataModels(models: Array<DataModel>): void;
}
