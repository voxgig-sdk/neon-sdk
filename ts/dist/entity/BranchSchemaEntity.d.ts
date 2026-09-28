import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { BranchSchema, BranchSchemaLoadMatch } from '../NeonTypes';
declare class BranchSchemaEntity extends NeonEntityBase<BranchSchema> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BranchSchemaEntity): BranchSchemaEntity;
    load(this: any, reqmatch?: BranchSchemaLoadMatch, ctrl?: Control): Promise<BranchSchemaEntity>;
}
export { BranchSchemaEntity };
