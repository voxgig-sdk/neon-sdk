import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthPluginConfig, NeonAuthPluginConfigListMatch } from '../NeonTypes';
declare class NeonAuthPluginConfigEntity extends NeonEntityBase<NeonAuthPluginConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthPluginConfigEntity): NeonAuthPluginConfigEntity;
    list(this: any, reqmatch?: NeonAuthPluginConfigListMatch, ctrl?: Control): Promise<NeonAuthPluginConfigEntity[]>;
}
export { NeonAuthPluginConfigEntity };
