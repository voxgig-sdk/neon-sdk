import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthOrganizationConfig, NeonAuthOrganizationConfigUpdateData } from '../NeonTypes';
declare class NeonAuthOrganizationConfigEntity extends NeonEntityBase<NeonAuthOrganizationConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthOrganizationConfigEntity): NeonAuthOrganizationConfigEntity;
    update(this: any, reqdata?: NeonAuthOrganizationConfigUpdateData, ctrl?: Control): Promise<NeonAuthOrganizationConfigEntity>;
}
export { NeonAuthOrganizationConfigEntity };
