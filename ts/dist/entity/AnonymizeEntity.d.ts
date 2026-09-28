import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Anonymize, AnonymizeCreateData } from '../NeonTypes';
declare class AnonymizeEntity extends NeonEntityBase<Anonymize> {
    constructor(client: NeonSDK, entopts: any);
    make(this: AnonymizeEntity): AnonymizeEntity;
    create(this: any, reqdata?: AnonymizeCreateData, ctrl?: Control): Promise<AnonymizeEntity>;
}
export { AnonymizeEntity };
