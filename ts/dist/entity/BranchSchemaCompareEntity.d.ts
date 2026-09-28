import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { BranchSchemaCompare, BranchSchemaCompareLoadMatch } from '../NeonTypes';
declare class BranchSchemaCompareEntity extends NeonEntityBase<BranchSchemaCompare> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BranchSchemaCompareEntity): BranchSchemaCompareEntity;
    load(this: any, reqmatch?: BranchSchemaCompareLoadMatch, ctrl?: Control): Promise<BranchSchemaCompareEntity>;
}
export { BranchSchemaCompareEntity };
