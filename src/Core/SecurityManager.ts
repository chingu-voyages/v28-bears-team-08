import {ISecurityManager} from "./";

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
}
