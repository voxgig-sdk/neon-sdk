import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { NeonAuthAllowLocalhost, NeonAuthAllowLocalhostLoadMatch, NeonAuthAllowLocalhostUpdateData } from '../NeonTypes';
declare class NeonAuthAllowLocalhostEntity extends NeonEntityBase<NeonAuthAllowLocalhost> {
    constructor(client: NeonSDK, entopts: any);
    make(this: NeonAuthAllowLocalhostEntity): NeonAuthAllowLocalhostEntity;
    load(this: any, reqmatch?: NeonAuthAllowLocalhostLoadMatch, ctrl?: Control): Promise<NeonAuthAllowLocalhostEntity>;
    update(this: any, reqdata?: NeonAuthAllowLocalhostUpdateData, ctrl?: Control): Promise<NeonAuthAllowLocalhostEntity>;
}
export { NeonAuthAllowLocalhostEntity };
