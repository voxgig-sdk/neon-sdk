import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Role, RoleLoadMatch, RoleListMatch, RoleCreateData, RoleRemoveMatch } from '../NeonTypes';
declare class RoleEntity extends NeonEntityBase<Role> {
    constructor(client: NeonSDK, entopts: any);
    make(this: RoleEntity): RoleEntity;
    load(this: any, reqmatch?: RoleLoadMatch, ctrl?: Control): Promise<RoleEntity>;
    list(this: any, reqmatch?: RoleListMatch, ctrl?: Control): Promise<RoleEntity[]>;
    create(this: any, reqdata?: RoleCreateData, ctrl?: Control): Promise<RoleEntity>;
    remove(this: any, reqmatch?: RoleRemoveMatch, ctrl?: Control): Promise<RoleEntity>;
}
export { RoleEntity };
