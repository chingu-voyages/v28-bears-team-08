import { DAO, IController, SecurityManager } from "../Core";

import { Broker, Message, BrokerMessage } from "./";
import { Subject } from "rxjs";
import { UIDriver } from "./UIDriver";
import bunyan from "bunyan";
import Logger from "bunyan";

export class CoreBroker implements Broker {
  private static logger: Logger = bunyan.createLogger({
    name: "CORE BROKER",
    level: "trace",
  });
  private static instance: CoreBroker;
  private controller: Subject<Message>;
  private dataAccess: Subject<Message>;
  private security: Subject<Message>;
  private viewDriver: Subject<Message>;

  private constructor(core: IController) {
    CoreBroker.logger.info("Core Broker initializing...");
    this.controller = new Subject<Message>();
    this.controller.subscribe(core);

    this.dataAccess = new Subject<Message>();
    this.dataAccess.subscribe(DAO.getInstance);

    this.security = new Subject<Message>();
    this.security.subscribe(SecurityManager.getInstance);

    this.viewDriver = new Subject<Message>();
    this.viewDriver.subscribe(UIDriver.getInstance);
  }

  static init(core: IController): CoreBroker {
    if (!this.instance) {
      this.instance = new CoreBroker(core);
    }

    return this.instance;
  }

  publish(msg: BrokerMessage): void {}

  subscribe(): void {}
}
