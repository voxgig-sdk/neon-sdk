import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { OperationType, OperationLoadMatch, OperationListMatch, OperationCreateData } from '../NeonTypes';
declare class OperationEntity extends NeonEntityBase<OperationType> {
    constructor(client: NeonSDK, entopts: any);
    make(this: OperationEntity): OperationEntity;
    load(this: any, reqmatch?: OperationLoadMatch, ctrl?: Control): Promise<OperationEntity>;
    list(this: any, reqmatch?: OperationListMatch, ctrl?: Control): Promise<OperationEntity[]>;
    create(this: any, reqdata?: OperationCreateData, ctrl?: Control): Promise<OperationEntity>;
}
export { OperationEntity };
