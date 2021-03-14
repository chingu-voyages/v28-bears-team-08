export interface SecurityManager {
    roles: Array<String>;

    init(): void;

    registerRoles(roles: Array<String>): void;
}
