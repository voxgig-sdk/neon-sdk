import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Trigger, TriggerLoadMatch, TriggerListMatch, TriggerCreateData, TriggerUpdateData } from '../NeonTypes';
declare class TriggerEntity extends NeonEntityBase<Trigger> {
    constructor(client: NeonSDK, entopts: any);
    make(this: TriggerEntity): TriggerEntity;
    load(this: any, reqmatch?: TriggerLoadMatch, ctrl?: Control): Promise<TriggerEntity>;
    list(this: any, reqmatch?: TriggerListMatch, ctrl?: Control): Promise<TriggerEntity[]>;
    create(this: any, reqdata?: TriggerCreateData, ctrl?: Control): Promise<TriggerEntity>;
    update(this: any, reqdata?: TriggerUpdateData, ctrl?: Control): Promise<TriggerEntity>;
}
export { TriggerEntity };
