import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectMemberRole, ProjectMemberRoleUpdateData, ProjectMemberRoleRemoveMatch } from '../NeonTypes';
declare class ProjectMemberRoleEntity extends NeonEntityBase<ProjectMemberRole> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectMemberRoleEntity): ProjectMemberRoleEntity;
    update(this: any, reqdata?: ProjectMemberRoleUpdateData, ctrl?: Control): Promise<ProjectMemberRoleEntity>;
    remove(this: any, reqmatch?: ProjectMemberRoleRemoveMatch, ctrl?: Control): Promise<ProjectMemberRoleEntity>;
}
export { ProjectMemberRoleEntity };
