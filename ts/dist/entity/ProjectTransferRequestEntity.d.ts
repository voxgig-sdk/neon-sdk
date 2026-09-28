import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectTransferRequest, ProjectTransferRequestCreateData } from '../NeonTypes';
declare class ProjectTransferRequestEntity extends NeonEntityBase<ProjectTransferRequest> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectTransferRequestEntity): ProjectTransferRequestEntity;
    create(this: any, reqdata?: ProjectTransferRequestCreateData, ctrl?: Control): Promise<ProjectTransferRequestEntity>;
}
export { ProjectTransferRequestEntity };
