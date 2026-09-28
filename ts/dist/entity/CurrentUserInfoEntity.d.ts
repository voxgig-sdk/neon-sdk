import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { CurrentUserInfo, CurrentUserInfoListMatch } from '../NeonTypes';
declare class CurrentUserInfoEntity extends NeonEntityBase<CurrentUserInfo> {
    constructor(client: NeonSDK, entopts: any);
    make(this: CurrentUserInfoEntity): CurrentUserInfoEntity;
    list(this: any, reqmatch?: CurrentUserInfoListMatch, ctrl?: Control): Promise<CurrentUserInfoEntity[]>;
}
export { CurrentUserInfoEntity };
