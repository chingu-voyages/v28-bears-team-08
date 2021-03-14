import {ISecurityManager} from "./";
import {Message} from "../Messaging";

export class SecurityManager implements ISecurityManager {
    private static instance: SecurityManager;

    roles: Array<String>;

    private constructor() {
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

    registerRoles(roles: Array<String>): void {
    }

    complete(): void {
    }

    error(err: any): void {
    }

    next(value: Message): void {
    }
}
