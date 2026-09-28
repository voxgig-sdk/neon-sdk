import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { AnonymizedBranchStatus, AnonymizedBranchStatusLoadMatch } from '../NeonTypes';
declare class AnonymizedBranchStatusEntity extends NeonEntityBase<AnonymizedBranchStatus> {
    constructor(client: NeonSDK, entopts: any);
    make(this: AnonymizedBranchStatusEntity): AnonymizedBranchStatusEntity;
    load(this: any, reqmatch?: AnonymizedBranchStatusLoadMatch, ctrl?: Control): Promise<AnonymizedBranchStatusEntity>;
}
export { AnonymizedBranchStatusEntity };
