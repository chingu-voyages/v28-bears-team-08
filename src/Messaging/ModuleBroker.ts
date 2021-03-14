import {Subject} from "rxjs";

import {IController} from "../Core";

import {BrokerMessage} from "./";

interface Broker {
    publish(msg: BrokerMessage): void;

    subscribe(): void;
}

export class ModuleBroker implements Broker {
    private static instance: ModuleBroker;
    private moduleSubject: Subject<BrokerMessage>;
    private controllerSubject: Subject<BrokerMessage>;
    private controller: IController;


    private constructor(core: IController) {
        this.moduleSubject = new Subject<BrokerMessage>();
        this.controllerSubject = new Subject<BrokerMessage>();
        this.controller = core;
        this.moduleSubject.subscribe(core)
    }

    static init(core: IController): ModuleBroker {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ModuleBroker(core);
            return this.instance;
        }
    }

    publish(msg: BrokerMessage) {

    }

    subscribe() {

    }
}
