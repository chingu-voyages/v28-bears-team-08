import { ISecurityManager } from "./";
import { Message } from "../Messaging";
import bunyan from "bunyan";
import Logger from "bunyan";

export class SecurityManager implements ISecurityManager {
  private static logger: Logger = bunyan.createLogger({
    name: "SECURITY MANAGER",
    level: "trace",
  });
  private static instance: SecurityManager;

  roles: Array<String>;

  private constructor() {
    SecurityManager.logger.info("Security Manager initializing...");
    this.roles = new Array<String>();
  }

  static init() {
    this.instance = new SecurityManager();
  }

  static get getInstance(): SecurityManager {
    if (!this.instance) {
      this.instance = new SecurityManager();
    }

    return this.instance;
  }

  registerRoles(roles: Array<String>): void {}

  complete(): void {}

  error(err: any): void {}

  next(value: Message): void {}
}
