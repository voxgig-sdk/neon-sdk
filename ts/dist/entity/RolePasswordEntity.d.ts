import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { RolePassword, RolePasswordLoadMatch } from '../NeonTypes';
declare class RolePasswordEntity extends NeonEntityBase<RolePassword> {
    constructor(client: NeonSDK, entopts: any);
    make(this: RolePasswordEntity): RolePasswordEntity;
    load(this: any, reqmatch?: RolePasswordLoadMatch, ctrl?: Control): Promise<RolePasswordEntity>;
}
export { RolePasswordEntity };
