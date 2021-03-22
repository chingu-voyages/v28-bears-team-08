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
  views: Array<View>;

  private constructor() {
    Controller.logger.info("Controller initializing");
    this.coreBroker = CoreBroker.init(this);
    this.modBroker = ModuleBroker.init(this);
    this.views = new Array<View>();

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

  requestData(request: Message): Message {
    // TODO: this is just a stub, so fix it
    return {
      type: "",
      received: false,
      from: request.from,
      to: request.to,
      request: request.request,
      response: request.response,
    };
  }

  next(message: Message): void {}

  complete(): void {}

  error(err: any): void {}
}
