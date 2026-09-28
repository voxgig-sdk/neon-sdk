import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonFunctionDeployment, NeonFunctionDeploymentCreateData } from '../NeonTypes';
declare class NeonFunctionDeploymentEntity extends NeonEntityBase<NeonFunctionDeployment> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonFunctionDeploymentEntity): NeonFunctionDeploymentEntity;
    create(this: any, reqdata?: NeonFunctionDeploymentCreateData, ctrl?: Control): Promise<NeonFunctionDeploymentEntity>;
}
export { NeonFunctionDeploymentEntity };
