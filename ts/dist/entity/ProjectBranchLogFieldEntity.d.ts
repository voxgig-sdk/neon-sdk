import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectBranchLogField, ProjectBranchLogFieldListMatch } from '../NeonTypes';
declare class ProjectBranchLogFieldEntity extends NeonEntityBase<ProjectBranchLogField> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectBranchLogFieldEntity): ProjectBranchLogFieldEntity;
    list(this: any, reqmatch?: ProjectBranchLogFieldListMatch, ctrl?: Control): Promise<ProjectBranchLogFieldEntity[]>;
}
export { ProjectBranchLogFieldEntity };
