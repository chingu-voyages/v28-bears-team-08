import {DataModel} from "../Modules";

export interface IDAO {
    dataModels: Array<DataModel>

    registerDataModels(models: Array<DataModel>): void;
}
