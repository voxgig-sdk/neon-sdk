import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthMagicLinkConfig, NeonAuthMagicLinkConfigUpdateData } from '../NeonTypes';
declare class NeonAuthMagicLinkConfigEntity extends NeonEntityBase<NeonAuthMagicLinkConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthMagicLinkConfigEntity): NeonAuthMagicLinkConfigEntity;
    update(this: any, reqdata?: NeonAuthMagicLinkConfigUpdateData, ctrl?: Control): Promise<NeonAuthMagicLinkConfigEntity>;
}
export { NeonAuthMagicLinkConfigEntity };
