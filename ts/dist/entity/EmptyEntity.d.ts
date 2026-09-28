import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Empty, EmptyCreateData, EmptyUpdateData, EmptyRemoveMatch } from '../NeonTypes';
declare class EmptyEntity extends NeonEntityBase<Empty> {
    constructor(client: NeonSDK, entopts: any);
    make(this: EmptyEntity): EmptyEntity;
    create(this: any, reqdata?: EmptyCreateData, ctrl?: Control): Promise<EmptyEntity>;
    update(this: any, reqdata?: EmptyUpdateData, ctrl?: Control): Promise<EmptyEntity>;
    remove(this: any, reqmatch?: EmptyRemoveMatch, ctrl?: Control): Promise<EmptyEntity>;
}
export { EmptyEntity };
