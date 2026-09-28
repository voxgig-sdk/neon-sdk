import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthEmailAndPasswordConfig, NeonAuthEmailAndPasswordConfigLoadMatch, NeonAuthEmailAndPasswordConfigUpdateData } from '../NeonTypes';
declare class NeonAuthEmailAndPasswordConfigEntity extends NeonEntityBase<NeonAuthEmailAndPasswordConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthEmailAndPasswordConfigEntity): NeonAuthEmailAndPasswordConfigEntity;
    load(this: any, reqmatch?: NeonAuthEmailAndPasswordConfigLoadMatch, ctrl?: Control): Promise<NeonAuthEmailAndPasswordConfigEntity>;
    update(this: any, reqdata?: NeonAuthEmailAndPasswordConfigUpdateData, ctrl?: Control): Promise<NeonAuthEmailAndPasswordConfigEntity>;
}
export { NeonAuthEmailAndPasswordConfigEntity };
