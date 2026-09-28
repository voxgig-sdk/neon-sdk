import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthIntegration, NeonAuthIntegrationLoadMatch, NeonAuthIntegrationListMatch } from '../NeonTypes';
declare class NeonAuthIntegrationEntity extends NeonEntityBase<NeonAuthIntegration> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthIntegrationEntity): NeonAuthIntegrationEntity;
    load(this: any, reqmatch?: NeonAuthIntegrationLoadMatch, ctrl?: Control): Promise<NeonAuthIntegrationEntity>;
    list(this: any, reqmatch?: NeonAuthIntegrationListMatch, ctrl?: Control): Promise<NeonAuthIntegrationEntity[]>;
}
export { NeonAuthIntegrationEntity };
