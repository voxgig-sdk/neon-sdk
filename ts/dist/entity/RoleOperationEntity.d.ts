import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { RoleOperation, RoleOperationCreateData } from '../NeonTypes';
declare class RoleOperationEntity extends NeonEntityBase<RoleOperation> {
    constructor(client: NeonSDK, entopts: any);
    make(this: RoleOperationEntity): RoleOperationEntity;
    create(this: any, reqdata?: RoleOperationCreateData, ctrl?: Control): Promise<RoleOperationEntity>;
}
export { RoleOperationEntity };
