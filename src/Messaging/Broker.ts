import { Observer } from "rxjs";
import { Message } from "./Message";

export interface Broker extends Observer<Message> {
  publish(msg: Message): void;

  subscribe(): void;
}
