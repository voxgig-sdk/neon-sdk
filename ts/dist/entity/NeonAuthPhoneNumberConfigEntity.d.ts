import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthPhoneNumberConfig, NeonAuthPhoneNumberConfigLoadMatch, NeonAuthPhoneNumberConfigUpdateData } from '../NeonTypes';
declare class NeonAuthPhoneNumberConfigEntity extends NeonEntityBase<NeonAuthPhoneNumberConfig> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthPhoneNumberConfigEntity): NeonAuthPhoneNumberConfigEntity;
    load(this: any, reqmatch?: NeonAuthPhoneNumberConfigLoadMatch, ctrl?: Control): Promise<NeonAuthPhoneNumberConfigEntity>;
    update(this: any, reqdata?: NeonAuthPhoneNumberConfigUpdateData, ctrl?: Control): Promise<NeonAuthPhoneNumberConfigEntity>;
}
export { NeonAuthPhoneNumberConfigEntity };
