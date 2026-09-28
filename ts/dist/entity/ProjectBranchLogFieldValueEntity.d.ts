import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectBranchLogFieldValue, ProjectBranchLogFieldValueListMatch } from '../NeonTypes';
declare class ProjectBranchLogFieldValueEntity extends NeonEntityBase<ProjectBranchLogFieldValue> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectBranchLogFieldValueEntity): ProjectBranchLogFieldValueEntity;
    list(this: any, reqmatch?: ProjectBranchLogFieldValueListMatch, ctrl?: Control): Promise<ProjectBranchLogFieldValueEntity[]>;
}
export { ProjectBranchLogFieldValueEntity };
