import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Branch, BranchLoadMatch, BranchListMatch, BranchCreateData, BranchUpdateData, BranchRemoveMatch } from '../NeonTypes';
declare class BranchEntity extends NeonEntityBase<Branch> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BranchEntity): BranchEntity;
    load(this: any, reqmatch?: BranchLoadMatch, ctrl?: Control): Promise<BranchEntity>;
    list(this: any, reqmatch?: BranchListMatch, ctrl?: Control): Promise<BranchEntity[]>;
    create(this: any, reqdata?: BranchCreateData, ctrl?: Control): Promise<BranchEntity>;
    update(this: any, reqdata?: BranchUpdateData, ctrl?: Control): Promise<BranchEntity>;
    remove(this: any, reqmatch?: BranchRemoveMatch, ctrl?: Control): Promise<BranchEntity>;
}
export { BranchEntity };
