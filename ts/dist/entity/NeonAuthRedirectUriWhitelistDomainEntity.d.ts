import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthRedirectUriWhitelistDomain, NeonAuthRedirectUriWhitelistDomainListMatch } from '../NeonTypes';
declare class NeonAuthRedirectUriWhitelistDomainEntity extends NeonEntityBase<NeonAuthRedirectUriWhitelistDomain> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthRedirectUriWhitelistDomainEntity): NeonAuthRedirectUriWhitelistDomainEntity;
    list(this: any, reqmatch?: NeonAuthRedirectUriWhitelistDomainListMatch, ctrl?: Control): Promise<NeonAuthRedirectUriWhitelistDomainEntity[]>;
}
export { NeonAuthRedirectUriWhitelistDomainEntity };
