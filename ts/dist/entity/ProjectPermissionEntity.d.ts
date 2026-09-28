import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectPermission, ProjectPermissionListMatch, ProjectPermissionCreateData, ProjectPermissionRemoveMatch } from '../NeonTypes';
declare class ProjectPermissionEntity extends NeonEntityBase<ProjectPermission> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectPermissionEntity): ProjectPermissionEntity;
    list(this: any, reqmatch?: ProjectPermissionListMatch, ctrl?: Control): Promise<ProjectPermissionEntity[]>;
    create(this: any, reqdata?: ProjectPermissionCreateData, ctrl?: Control): Promise<ProjectPermissionEntity>;
    remove(this: any, reqmatch?: ProjectPermissionRemoveMatch, ctrl?: Control): Promise<ProjectPermissionEntity>;
}
export { ProjectPermissionEntity };
