import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { BranchAiGateway, BranchAiGatewayLoadMatch } from '../NeonTypes';
declare class BranchAiGatewayEntity extends NeonEntityBase<BranchAiGateway> {
    constructor(client: NeonSDK, entopts: any);
    make(this: BranchAiGatewayEntity): BranchAiGatewayEntity;
    load(this: any, reqmatch?: BranchAiGatewayLoadMatch, ctrl?: Control): Promise<BranchAiGatewayEntity>;
}
export { BranchAiGatewayEntity };
