import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { Presign, PresignCreateData } from '../NeonTypes';
declare class PresignEntity extends NeonEntityBase<Presign> {
    constructor(client: NeonSDK, entopts: any);
    make(this: PresignEntity): PresignEntity;
    create(this: any, reqdata?: PresignCreateData, ctrl?: Control): Promise<PresignEntity>;
}
export { PresignEntity };
