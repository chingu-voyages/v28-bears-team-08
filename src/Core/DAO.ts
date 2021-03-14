import {DataModel} from "../Modules/DataModel";

export interface DAO {
    dataModels: Array<DataModel>

    init(): void;

    registerDataModels(models: Array<DataModel>): void;
}
