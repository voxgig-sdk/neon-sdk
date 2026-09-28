import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Consumption, ConsumptionListMatch } from '../NeonTypes';
declare class ConsumptionEntity extends NeonEntityBase<Consumption> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ConsumptionEntity): ConsumptionEntity;
    list(this: any, reqmatch?: ConsumptionListMatch, ctrl?: Control): Promise<ConsumptionEntity[]>;
}
export { ConsumptionEntity };
