import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectRecover, ProjectRecoverCreateData } from '../NeonTypes';
declare class ProjectRecoverEntity extends NeonEntityBase<ProjectRecover> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectRecoverEntity): ProjectRecoverEntity;
    create(this: any, reqdata?: ProjectRecoverCreateData, ctrl?: Control): Promise<ProjectRecoverEntity>;
}
export { ProjectRecoverEntity };
