import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectMember, ProjectMemberListMatch } from '../NeonTypes';
declare class ProjectMemberEntity extends NeonEntityBase<ProjectMember> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectMemberEntity): ProjectMemberEntity;
    list(this: any, reqmatch?: ProjectMemberListMatch, ctrl?: Control): Promise<ProjectMemberEntity[]>;
}
export { ProjectMemberEntity };
