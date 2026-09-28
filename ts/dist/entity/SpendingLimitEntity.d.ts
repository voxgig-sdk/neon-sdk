import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { SpendingLimit, SpendingLimitLoadMatch, SpendingLimitUpdateData } from '../NeonTypes';
declare class SpendingLimitEntity extends NeonEntityBase<SpendingLimit> {
    constructor(client: NeonSDK, entopts: any);
    make(this: SpendingLimitEntity): SpendingLimitEntity;
    load(this: any, reqmatch?: SpendingLimitLoadMatch, ctrl?: Control): Promise<SpendingLimitEntity>;
    update(this: any, reqdata?: SpendingLimitUpdateData, ctrl?: Control): Promise<SpendingLimitEntity>;
}
export { SpendingLimitEntity };
