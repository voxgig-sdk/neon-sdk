import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Jwk, JwkListMatch, JwkCreateData, JwkRemoveMatch } from '../NeonTypes';
declare class JwkEntity extends NeonEntityBase<Jwk> {
    constructor(client: NeonSDK, entopts: any);
    make(this: JwkEntity): JwkEntity;
    list(this: any, reqmatch?: JwkListMatch, ctrl?: Control): Promise<JwkEntity[]>;
    create(this: any, reqdata?: JwkCreateData, ctrl?: Control): Promise<JwkEntity>;
    remove(this: any, reqmatch?: JwkRemoveMatch, ctrl?: Control): Promise<JwkEntity>;
}
export { JwkEntity };
