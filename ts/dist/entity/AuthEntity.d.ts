import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Auth, AuthLoadMatch, AuthCreateData, AuthRemoveMatch } from '../NeonTypes';
declare class AuthEntity extends NeonEntityBase<Auth> {
    constructor(client: NeonSDK, entopts: any);
    make(this: AuthEntity): AuthEntity;
    load(this: any, reqmatch?: AuthLoadMatch, ctrl?: Control): Promise<AuthEntity>;
    create(this: any, reqdata?: AuthCreateData, ctrl?: Control): Promise<AuthEntity>;
    remove(this: any, reqmatch?: AuthRemoveMatch, ctrl?: Control): Promise<AuthEntity>;
}
export { AuthEntity };
