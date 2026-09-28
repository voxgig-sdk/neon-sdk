import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { BranchOperation, BranchOperationCreateData } from '../NeonTypes';
declare class BranchOperationEntity extends NeonEntityBase<BranchOperation> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BranchOperationEntity): BranchOperationEntity;
    create(this: any, reqdata?: BranchOperationCreateData, ctrl?: Control): Promise<BranchOperationEntity>;
}
export { BranchOperationEntity };
