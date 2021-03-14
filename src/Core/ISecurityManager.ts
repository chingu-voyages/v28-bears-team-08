export interface ISecurityManager {
    roles: Array<String>;

    registerRoles(roles: Array<String>): void;
}

