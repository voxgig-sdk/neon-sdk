import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthCreateIntegration, NeonAuthCreateIntegrationCreateData } from '../NeonTypes';
declare class NeonAuthCreateIntegrationEntity extends NeonEntityBase<NeonAuthCreateIntegration> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthCreateIntegrationEntity): NeonAuthCreateIntegrationEntity;
    create(this: any, reqdata?: NeonAuthCreateIntegrationCreateData, ctrl?: Control): Promise<NeonAuthCreateIntegrationEntity>;
}
export { NeonAuthCreateIntegrationEntity };
