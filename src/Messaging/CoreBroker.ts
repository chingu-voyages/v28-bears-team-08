import { DAO, IController, SecurityManager } from "../Core";

import { Broker, Message, SystemComponents } from "./";
import { Observer, Subject } from "rxjs";
import { UIDriver } from "./UIDriver";

import { createTransientMessage } from "./messageFactory";

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
    // if TransientMessage, unwrap before routing
    if (msg.type === "Transient") {
      // here we have to explicitly inform TS that we know the request in a
      // TransientMessage is another Message
      msg = msg.request as Message;
    }

    const route = this.routeMessage(msg);

    if (route !== this) {
      route.next(msg);
    }
  }

  subscribe(): void {}

  private routeMessage(msg: Message): Observer<Message> {
    let route: Observer<Message>;

    route = this.routeByType(msg);

    return route;
  }

  private routeByType(msg: Message): Observer<Message> {
    let route: Observer<Message> = this;

    // First, route based on Message type
    switch (msg.type) {
      case "Security": {
        route = this.security;
        break;
      }
      case "DataRequest": {
        route = this.dataAccess;
        break;
      }
      case "View": {
        route = this.controller;
        break;
      }
      case "DataResponse": {
        route = this.routeByTo(msg);
        break;
      }
      case "Transient": {
        // @ts-ignore
        if ("request" in msg.request) {
          route = this.routeMessage(msg.request);
        }
        break;
      }
      default:
        throw new Error("Cannot find route");
    }

    return route;
  }

  private routeByTo(msg: Message): Observer<Message> {
    let route: Observer<Message> = this;

    // route based on destination field
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
          msg = createTransientMessage(msg);
          route = this.controller;
          break;
      }
    }

    return route;
  }

  static async submit(msg: Message): Promise<unknown> {
    let route = this.instance.routeMessage(msg);
    route.next(msg);
    return msg.response;
  }

  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {}
}
