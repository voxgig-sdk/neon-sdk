import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ProjectBranchLogsQuery, ProjectBranchLogsQueryCreateData } from '../NeonTypes';
declare class ProjectBranchLogsQueryEntity extends NeonEntityBase<ProjectBranchLogsQuery> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectBranchLogsQueryEntity): ProjectBranchLogsQueryEntity;
    create(this: any, reqdata?: ProjectBranchLogsQueryCreateData, ctrl?: Control): Promise<ProjectBranchLogsQueryEntity>;
}
export { ProjectBranchLogsQueryEntity };
