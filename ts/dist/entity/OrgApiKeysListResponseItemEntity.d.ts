import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { OrgApiKeysListResponseItem, OrgApiKeysListResponseItemListMatch } from '../NeonTypes';
declare class OrgApiKeysListResponseItemEntity extends NeonEntityBase<OrgApiKeysListResponseItem> {
    constructor(client: NeonSDK, entopts: any);
    make(this: OrgApiKeysListResponseItemEntity): OrgApiKeysListResponseItemEntity;
    list(this: any, reqmatch?: OrgApiKeysListResponseItemListMatch, ctrl?: Control): Promise<OrgApiKeysListResponseItemEntity[]>;
}
export { OrgApiKeysListResponseItemEntity };
