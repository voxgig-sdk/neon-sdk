import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Project, ProjectLoadMatch, ProjectListMatch, ProjectCreateData, ProjectUpdateData, ProjectRemoveMatch } from '../NeonTypes';
declare class ProjectEntity extends NeonEntityBase<Project> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ProjectEntity): ProjectEntity;
    load(this: any, reqmatch?: ProjectLoadMatch, ctrl?: Control): Promise<ProjectEntity>;
    list(this: any, reqmatch?: ProjectListMatch, ctrl?: Control): Promise<ProjectEntity[]>;
    create(this: any, reqdata?: ProjectCreateData, ctrl?: Control): Promise<ProjectEntity>;
    update(this: any, reqdata?: ProjectUpdateData, ctrl?: Control): Promise<ProjectEntity>;
    remove(this: any, reqmatch?: ProjectRemoveMatch, ctrl?: Control): Promise<ProjectEntity>;
}
export { ProjectEntity };
