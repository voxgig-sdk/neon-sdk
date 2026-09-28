import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthOauthProvider, NeonAuthOauthProviderListMatch, NeonAuthOauthProviderCreateData, NeonAuthOauthProviderUpdateData } from '../NeonTypes';
declare class NeonAuthOauthProviderEntity extends NeonEntityBase<NeonAuthOauthProvider> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthOauthProviderEntity): NeonAuthOauthProviderEntity;
    list(this: any, reqmatch?: NeonAuthOauthProviderListMatch, ctrl?: Control): Promise<NeonAuthOauthProviderEntity[]>;
    create(this: any, reqdata?: NeonAuthOauthProviderCreateData, ctrl?: Control): Promise<NeonAuthOauthProviderEntity>;
    update(this: any, reqdata?: NeonAuthOauthProviderUpdateData, ctrl?: Control): Promise<NeonAuthOauthProviderEntity>;
}
export { NeonAuthOauthProviderEntity };
