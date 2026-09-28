import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthCreateNewUser, NeonAuthCreateNewUserCreateData } from '../NeonTypes';
declare class NeonAuthCreateNewUserEntity extends NeonEntityBase<NeonAuthCreateNewUser> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthCreateNewUserEntity): NeonAuthCreateNewUserEntity;
    create(this: any, reqdata?: NeonAuthCreateNewUserCreateData, ctrl?: Control): Promise<NeonAuthCreateNewUserEntity>;
}
export { NeonAuthCreateNewUserEntity };
