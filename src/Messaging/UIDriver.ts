import { IUIDriver } from "./IUIDriver";
import { Message } from "./Message";
import bunyan from "bunyan";
import Logger from "bunyan";

export class UIDriver implements IUIDriver {
  private static logger: Logger = bunyan.createLogger({name: "UI DRIVER", level: "trace"})
  private static instance: UIDriver;

  private constructor() {
    UIDriver.logger.info("UI Driver initializing...")
  }

  static get getInstance(): UIDriver {
    if (!this.instance) {
      this.instance = new UIDriver();
    }

    return this.instance;
  }

  get(request: String): Message {
    // return a mock for now
    return {
      from: "driver",
      to: "ui",
      request: request,
      response: new Promise<Message | Function | String>((resolve) => {}),
    };
  }

  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {}
}
