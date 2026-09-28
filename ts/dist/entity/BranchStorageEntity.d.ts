import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { BranchStorage, BranchStorageLoadMatch } from '../NeonTypes';
declare class BranchStorageEntity extends NeonEntityBase<BranchStorage> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BranchStorageEntity): BranchStorageEntity;
    load(this: any, reqmatch?: BranchStorageLoadMatch, ctrl?: Control): Promise<BranchStorageEntity>;
}
export { BranchStorageEntity };
