import log, { Logger } from "loglevel";

import { IController } from "./";
import { DAO, SecurityManager } from "./";

import { Message } from "../Messaging";
import { ModuleBroker } from "../Messaging";

import { DataModel, View } from "../Modules";
import { CoreBroker } from "../Messaging/CoreBroker";

export class Controller implements IController {
  private static instance: Controller;
  private static logger: Logger = log.getLogger("CONTROLLER");

  coreBroker: CoreBroker;
  modBroker: ModuleBroker;
  views: Map<string, View>;

  private constructor() {
    Controller.logger.info("Controller initializing");
    this.coreBroker = CoreBroker.init(this);
    this.modBroker = ModuleBroker.init(this);
    this.views = new Map<string, View>();

    log.trace(this);
  }

  static init(): void {
    SecurityManager.init();
    DAO.init();
    this.instance = new Controller();

    this.instance.registerModules();
  }

  static get controller(): Controller {
    if (!this.instance) {
      this.instance = new Controller();
    }

    console.log("Test");
    return this.instance;
  }

  private registerModules() {
    // get module list from DAO
    // wrap module list in config request message
    // submit to moduleBroker
    // wait for promise to resolve
    //
  }

  receiveModuleConfig(
    views: Array<View>,
    roles: Array<String>,
    dataModels: Array<DataModel>
  ): void {}

  next(message: Message): void {
    if (message.type === "ViewRequest") {
      message.response = Promise.resolve(
        this.views.get(message.request as string)
      );
    }
  }

  complete(): void {}

  error(err: any): void {}
}
