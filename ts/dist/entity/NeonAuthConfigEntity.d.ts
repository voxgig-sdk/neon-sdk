import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthConfig, NeonAuthConfigUpdateData } from '../NeonTypes';
declare class NeonAuthConfigEntity extends NeonEntityBase<NeonAuthConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthConfigEntity): NeonAuthConfigEntity;
    update(this: any, reqdata?: NeonAuthConfigUpdateData, ctrl?: Control): Promise<NeonAuthConfigEntity>;
}
export { NeonAuthConfigEntity };
