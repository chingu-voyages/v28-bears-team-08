import {Subject} from "rxjs";
import {BrokerMessage} from "./Message";
import {Controller} from "../Core/Controller";
import {AppModule} from "../Modules/AppModule";

export class Broker {
    private static instance: Broker;



    private constructor(core: Controller) {

    }

    static init(core: Controller): Broker {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new Broker(core);
            return this.instance;
        }
    }

    publish(msg: BrokerMessage) {

    }

    subscribe() {

    }
}
