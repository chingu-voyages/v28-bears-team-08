import { IUIDriver } from "./IUIDriver";
import { Message } from "./Message";
import { SystemComponents } from "./Broker";

export class UIDriver implements IUIDriver {
  private static instance: UIDriver;

  private constructor() {}

  static get getInstance(): UIDriver {
    if (!this.instance) {
      this.instance = new UIDriver();
    }

    return this.instance;
  }

  get(request: String): Message {
    // return a mock for now
    return {
      type: "",
      received: false,
      from: SystemComponents.UI,
      to: SystemComponents.DAO,
      request: request,
      response: new Promise<Message | Function | String>((resolve) => {}),
    };
  }

  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {}
}
