import mongoose, {Connection, Mongoose} from "mongoose";
import {IDAO} from "./";
import {DataModel} from "../Modules";
import {Message} from "../Messaging";

require('dotenv').config();

export class DAO implements IDAO {
    private static instance: DAO;
    private mongoose: Mongoose;
    private db: Connection;

    dataModels: Array<DataModel>;

    private constructor() {
        this.dataModels = new Array<DataModel>();
        this.mongoose = mongoose;

        this.connect();

        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console,'connection error:'));
        this.db.once('open', () => {
            console.log('Connection to database successful.');
        })

    }

    static get getInstance(): DAO {
        if (!this.instance) {
            this.init();
        }
        return this.instance;
    }

    /* Initialization Methods */
    static init() {
        this.instance = new DAO();
    }

    private connect(): void {
        const {CONNECTION_STRING} = process.env;
        if (CONNECTION_STRING) {
            mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
        }

    }

    registerDataModels(models: Array<DataModel>): void {
        models.forEach(model => this.dataModels.push(model));
    }

    /* Observer Methods */
    complete(): void {
    }

    error(err: any): void {
    }

    next(value: Message): void {
    }
}
