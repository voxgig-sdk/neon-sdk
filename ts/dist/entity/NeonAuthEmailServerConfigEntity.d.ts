import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthEmailServerConfig, NeonAuthEmailServerConfigUpdateData } from '../NeonTypes';
declare class NeonAuthEmailServerConfigEntity extends NeonEntityBase<NeonAuthEmailServerConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthEmailServerConfigEntity): NeonAuthEmailServerConfigEntity;
    update(this: any, reqdata?: NeonAuthEmailServerConfigUpdateData, ctrl?: Control): Promise<NeonAuthEmailServerConfigEntity>;
}
export { NeonAuthEmailServerConfigEntity };
