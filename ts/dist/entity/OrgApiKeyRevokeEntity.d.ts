import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { OrgApiKeyRevoke, OrgApiKeyRevokeRemoveMatch } from '../NeonTypes';
declare class OrgApiKeyRevokeEntity extends NeonEntityBase<OrgApiKeyRevoke> {
    constructor(client: NeonSDK, entopts: any);
    make(this: OrgApiKeyRevokeEntity): OrgApiKeyRevokeEntity;
    remove(this: any, reqmatch?: OrgApiKeyRevokeRemoveMatch, ctrl?: Control): Promise<OrgApiKeyRevokeEntity>;
}
export { OrgApiKeyRevokeEntity };
