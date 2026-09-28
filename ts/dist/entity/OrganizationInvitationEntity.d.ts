import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { OrganizationInvitation, OrganizationInvitationListMatch, OrganizationInvitationCreateData } from '../NeonTypes';
declare class OrganizationInvitationEntity extends NeonEntityBase<OrganizationInvitation> {
    constructor(client: NeonSDK, entopts: any);
    make(this: OrganizationInvitationEntity): OrganizationInvitationEntity;
    list(this: any, reqmatch?: OrganizationInvitationListMatch, ctrl?: Control): Promise<OrganizationInvitationEntity[]>;
    create(this: any, reqdata?: OrganizationInvitationCreateData, ctrl?: Control): Promise<OrganizationInvitationEntity>;
}
export { OrganizationInvitationEntity };
