import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { FunctionType, FunctionListMatch, FunctionRemoveMatch } from '../NeonTypes';
declare class FunctionEntity extends NeonEntityBase<FunctionType> {
    constructor(client: NeonSDK, entopts: any);
    make(this: FunctionEntity): FunctionEntity;
    list(this: any, reqmatch?: FunctionListMatch, ctrl?: Control): Promise<FunctionEntity[]>;
    remove(this: any, reqmatch?: FunctionRemoveMatch, ctrl?: Control): Promise<FunctionEntity>;
}
export { FunctionEntity };
