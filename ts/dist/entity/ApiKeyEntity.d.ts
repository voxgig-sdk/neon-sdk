import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { ApiKey, ApiKeyListMatch, ApiKeyCreateData, ApiKeyRemoveMatch } from '../NeonTypes';
declare class ApiKeyEntity extends NeonEntityBase<ApiKey> {
    constructor(client: NeonSDK, entopts: any);
    make(this: ApiKeyEntity): ApiKeyEntity;
    list(this: any, reqmatch?: ApiKeyListMatch, ctrl?: Control): Promise<ApiKeyEntity[]>;
    create(this: any, reqdata?: ApiKeyCreateData, ctrl?: Control): Promise<ApiKeyEntity>;
    remove(this: any, reqmatch?: ApiKeyRemoveMatch, ctrl?: Control): Promise<ApiKeyEntity>;
}
export { ApiKeyEntity };
