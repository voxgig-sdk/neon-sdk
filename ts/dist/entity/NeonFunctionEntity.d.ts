import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonFunction, NeonFunctionLoadMatch, NeonFunctionUpdateData } from '../NeonTypes';
declare class NeonFunctionEntity extends NeonEntityBase<NeonFunction> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonFunctionEntity): NeonFunctionEntity;
    load(this: any, reqmatch?: NeonFunctionLoadMatch, ctrl?: Control): Promise<NeonFunctionEntity>;
    update(this: any, reqdata?: NeonFunctionUpdateData, ctrl?: Control): Promise<NeonFunctionEntity>;
}
export { NeonFunctionEntity };
