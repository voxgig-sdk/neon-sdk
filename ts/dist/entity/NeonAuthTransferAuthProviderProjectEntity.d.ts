import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthTransferAuthProviderProject, NeonAuthTransferAuthProviderProjectCreateData } from '../NeonTypes';
declare class NeonAuthTransferAuthProviderProjectEntity extends NeonEntityBase<NeonAuthTransferAuthProviderProject> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthTransferAuthProviderProjectEntity): NeonAuthTransferAuthProviderProjectEntity;
    create(this: any, reqdata?: NeonAuthTransferAuthProviderProjectCreateData, ctrl?: Control): Promise<NeonAuthTransferAuthProviderProjectEntity>;
}
export { NeonAuthTransferAuthProviderProjectEntity };
