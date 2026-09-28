import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { UpdateNeonAuthUserRole, UpdateNeonAuthUserRoleUpdateData } from '../NeonTypes';
declare class UpdateNeonAuthUserRoleEntity extends NeonEntityBase<UpdateNeonAuthUserRole> {
    constructor(client: NeonSDK, entopts: any);
    make(this: UpdateNeonAuthUserRoleEntity): UpdateNeonAuthUserRoleEntity;
    update(this: any, reqdata?: UpdateNeonAuthUserRoleUpdateData, ctrl?: Control): Promise<UpdateNeonAuthUserRoleEntity>;
}
export { UpdateNeonAuthUserRoleEntity };
