import { NeonEntityBase } from '../NeonEntityBase';
import type { NeonSDK } from '../NeonSDK';
import type { Control } from '../types';
import type { SendNeonAuthTestEmail, SendNeonAuthTestEmailCreateData } from '../NeonTypes';
declare class SendNeonAuthTestEmailEntity extends NeonEntityBase<SendNeonAuthTestEmail> {
    constructor(client: NeonSDK, entopts: any);
    make(this: SendNeonAuthTestEmailEntity): SendNeonAuthTestEmailEntity;
    create(this: any, reqdata?: SendNeonAuthTestEmailCreateData, ctrl?: Control): Promise<SendNeonAuthTestEmailEntity>;
}
export { SendNeonAuthTestEmailEntity };
