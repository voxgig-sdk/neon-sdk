import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { OrgApiKeyCreate, OrgApiKeyCreateCreateData } from '../NeonTypes';
declare class OrgApiKeyCreateEntity extends NeonEntityBase<OrgApiKeyCreate> {
    constructor(client: NeonSDK, entopts: any);
    make(this: OrgApiKeyCreateEntity): OrgApiKeyCreateEntity;
    create(this: any, reqdata?: OrgApiKeyCreateCreateData, ctrl?: Control): Promise<OrgApiKeyCreateEntity>;
}
export { OrgApiKeyCreateEntity };
