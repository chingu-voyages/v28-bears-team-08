import { Observer } from "rxjs";
import { Message } from "./Message";

export interface Broker extends Observer<Message> {
  publish(msg: Message): void;

  subscribe(): void;
}

export enum SystemComponents {
  Controller = "CONTROLLER",
  Security = "SECURITY",
  DAO = "DAO",
  UI = "UI",
  Module = "MODULE",
}
