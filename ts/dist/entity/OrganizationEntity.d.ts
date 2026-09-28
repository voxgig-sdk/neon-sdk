import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Organization, OrganizationLoadMatch, OrganizationListMatch, OrganizationCreateData, OrganizationRemoveMatch } from '../NeonTypes';
declare class OrganizationEntity extends NeonEntityBase<Organization> {
    constructor(client: NeonSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
    load(this: any, reqmatch?: OrganizationLoadMatch, ctrl?: Control): Promise<OrganizationEntity>;
    list(this: any, reqmatch?: OrganizationListMatch, ctrl?: Control): Promise<OrganizationEntity[]>;
    create(this: any, reqdata?: OrganizationCreateData, ctrl?: Control): Promise<OrganizationEntity>;
    remove(this: any, reqmatch?: OrganizationRemoveMatch, ctrl?: Control): Promise<OrganizationEntity>;
}
export { OrganizationEntity };
