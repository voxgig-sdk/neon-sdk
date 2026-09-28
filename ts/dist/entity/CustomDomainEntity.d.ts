import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { CustomDomain, CustomDomainCreateData } from '../NeonTypes';
declare class CustomDomainEntity extends NeonEntityBase<CustomDomain> {
    constructor(client: NeonSDK, entopts: any);
    make(this: CustomDomainEntity): CustomDomainEntity;
    create(this: any, reqdata?: CustomDomainCreateData, ctrl?: Control): Promise<CustomDomainEntity>;
}
export { CustomDomainEntity };
