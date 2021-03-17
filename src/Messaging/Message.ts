import { IController } from "../Core";
import { AppModule } from "../Modules";

export interface Message {
  from: unknown;
  to: unknown;
  request: Message | Function | String;
  response?: Promise<Message | Function | String>;
}

export interface Response extends Message {}

export interface BrokerMessage extends Message {
  from: IController | AppModule;
  to: "controller" | "module";
}

export interface DataRequest extends Message {}
