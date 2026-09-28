import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { AuthLegacy, AuthLegacyCreateData, AuthLegacyRemoveMatch } from '../NeonTypes';
declare class AuthLegacyEntity extends NeonEntityBase<AuthLegacy> {
    constructor(client: NeonSDK, entopts: any);
    make(this: AuthLegacyEntity): AuthLegacyEntity;
    create(this: any, reqdata?: AuthLegacyCreateData, ctrl?: Control): Promise<AuthLegacyEntity>;
    remove(this: any, reqmatch?: AuthLegacyRemoveMatch, ctrl?: Control): Promise<AuthLegacyEntity>;
}
export { AuthLegacyEntity };
