import {IDAO} from "./";
import {DataModel} from "../Modules";

export class DAO implements IDAO {
    private static instance: DAO;
    dataModels: Array<DataModel>;

    private constructor() {
        this.dataModels = new Array<DataModel>();
    }

    static init() {
        this.instance = new DAO();
    }

    static get getInstance(): DAO {
        if (!this.instance) {
            this.instance = new DAO();
        }
        return this.instance;
    }

    registerDataModels(models: Array<DataModel>): void {
        models.forEach(model => this.dataModels.push(model));
    }
}
