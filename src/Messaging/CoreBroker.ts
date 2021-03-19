import { DAO, IController, SecurityManager } from "../Core";

import { Broker, Message} from "./";
import { Observer, Subject } from "rxjs";
import { UIDriver } from "./UIDriver";

export enum SystemComponents {
  Controller = "CONTROLLER",
  Security = "SECURITY",
  DAO = "DAO",
  UI = "UI",
  Module = "MODULE",
}

export class CoreBroker implements Broker {
  private static instance: CoreBroker;
  private readonly controller: Subject<Message>;
  private readonly dataAccess: Subject<Message>;
  private readonly security: Subject<Message>;
  private readonly viewDriver: Subject<Message>;

  private constructor(core: IController) {
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

  publish(msg: Message): void {
    const route = this.getRoute(msg);

    if (route !== this) {
      route.next(msg);
    }
  }

  subscribe(): void {}

  private getRoute(msg: Message): Observer<Message> {
    let route: Observer<Message> = this;

    // First, route based on Message type
    switch (msg.type) {
      case "Security":
        route = this.security;
        break;
      case "DataRequest":
        route = this.dataAccess;
        break;
      case "ViewRequest":
        route = this.controller;
        break;
      case "DataResponse":
      case "Transient":
        // Second, route based on destination field
        if (msg.to in SystemComponents) {
          switch (msg.to) {
            case SystemComponents.DAO:
              route = this.dataAccess;
              break;
            case SystemComponents.Controller:
              route = this.controller;
              break;
            case SystemComponents.Security:
              route = this.security;
              break;
            case SystemComponents.UI:
              route = this.viewDriver;
              break;
            case SystemComponents.Module:
              // TODO Work out how this needs to work -
              //  Module in .to indicates the Message needs to be
              //  handed off to the other broker
              throw new Error("Cannot find route");
          }
        }
        break;
      default:
        throw new Error("Cannot find route");
    }

    return route;
  }

  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {}
}
