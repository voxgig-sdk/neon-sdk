import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { MaskingRule, MaskingRuleListMatch, MaskingRuleUpdateData } from '../NeonTypes';
declare class MaskingRuleEntity extends NeonEntityBase<MaskingRule> {
    constructor(client: NeonSDK, entopts: any);
    make(this: MaskingRuleEntity): MaskingRuleEntity;
    list(this: any, reqmatch?: MaskingRuleListMatch, ctrl?: Control): Promise<MaskingRuleEntity[]>;
    update(this: any, reqdata?: MaskingRuleUpdateData, ctrl?: Control): Promise<MaskingRuleEntity>;
}
export { MaskingRuleEntity };
