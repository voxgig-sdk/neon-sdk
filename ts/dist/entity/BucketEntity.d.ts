import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Bucket, BucketLoadMatch, BucketListMatch, BucketCreateData, BucketRemoveMatch } from '../NeonTypes';
declare class BucketEntity extends NeonEntityBase<Bucket> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BucketEntity): BucketEntity;
    load(this: any, reqmatch?: BucketLoadMatch, ctrl?: Control): Promise<BucketEntity>;
    list(this: any, reqmatch?: BucketListMatch, ctrl?: Control): Promise<BucketEntity[]>;
    create(this: any, reqdata?: BucketCreateData, ctrl?: Control): Promise<BucketEntity>;
    remove(this: any, reqmatch?: BucketRemoveMatch, ctrl?: Control): Promise<BucketEntity>;
}
export { BucketEntity };
