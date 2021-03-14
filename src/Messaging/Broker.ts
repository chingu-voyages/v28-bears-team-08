import {BrokerMessage} from "./Message";

export interface Broker {
    publish(msg: BrokerMessage): void;

    subscribe(): void;
}
