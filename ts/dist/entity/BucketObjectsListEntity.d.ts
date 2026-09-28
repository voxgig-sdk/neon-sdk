import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { BucketObjectsList, BucketObjectsListListMatch } from '../NeonTypes';
declare class BucketObjectsListEntity extends NeonEntityBase<BucketObjectsList> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BucketObjectsListEntity): BucketObjectsListEntity;
    list(this: any, reqmatch?: BucketObjectsListListMatch, ctrl?: Control): Promise<BucketObjectsListEntity[]>;
}
export { BucketObjectsListEntity };
